<?php
defined( 'ABSPATH' ) || exit;
if (empty($args['tab_content_archive_posts'])) {
	return;
}
$archive_default = array(
	'image' => array(
		'on' =>1,
		'val' => array(
			'image_w' => '',
			'image_h' => '',
			'auto_fullwidth' => false,
			'fallback_s' => 'no',
			'fallback_i' => '',
			'lightbox_w_unit' => '%',
			'lightbox_h_unit' => '%',
			'link' => 'permalink',
			'open_link' => 'regular'
		)
	),
	't' => array(
		'on' => 1,
		'val' => array(
			'link' => 'permalink',
			'open_link' => 'regular',
			'lightbox_w_unit' => '%',
			'lightbox_h_unit' => '%',
			'html_tag' => 'h2',
			'no_follow' => 'no'
		)
	),
	'p_date' => array(
		'on' => 1,
		'val' => array(
			'format' => 'def'
		)
	),
	'p_meta' => array(
		'on' => 1,
		'val' => array(
			'tab_content_post_meta' => array()
		)
	),
	'cont' => array(
		'on' => 1,
		'val' => array(
			'content_type' => 'excerpt',
			'excerpt_length' => ''
		)
	)
);
$TBP_DIR = TBP_DIR . 'templates';
foreach ($args['tab_content_archive_posts'] as  $item) {
	$id=$item['id'];
	if (isset($archive_default[$id])) {
		if (!isset($item['val'])) {
			$item['val'] = array();
		}
		$item['val']+=$archive_default[$id]['val'];
		$on=isset($item['on'])?((int)$item['on']):$archive_default[$id]['on'];
		if ($on !== 1) {
			continue;
		}
	} else {
		continue;
	}
	switch ($id) {
		// Title
		case 't':
			themify_before_post_title(); // Hook
			self::retrieve_template('partials/title.php', $item['val'], $TBP_DIR);
			themify_after_post_title(); // Hook
			break;
		// Image
		case 'image':
			$param_image=array(
				'w'=>$item['val']['image_w'],
				'h'=>$item['val']['image_h']
			);
			if ($item['val']['fallback_s'] === 'yes' && $item['val']['fallback_i'] !== '' && !has_post_thumbnail()) {
				$param_image['src']=esc_url($item['val']['fallback_i']);
				$param_image['alt']='';
			}
			$post_image = themify_get_image($param_image);
			if ($post_image === '' && Themify_Builder::$frontedit_active===true) {
				$post_image = '<img itemprop="url" src="' . THEMIFY_BUILDER_URI . '/img/image-placeholder.png">';
			}

			if ($post_image !== '') {
				themify_before_post_image(); // Hook
				?>

				<figure class="post-image image-wrap<?php echo ( $item['val']['auto_fullwidth'] == '1' ) ? ' auto_fullwidth' : ''; ?>">
					<?php
					if ($item['val']['link'] === 'none' || ( $item['val']['link'] === 'custom' && empty($item['val']['custom_link']) )) {
						echo $post_image;
					} else {
						$i_target = '';
						$link_attr = array();
						if ($item['val']['open_link'] === 'newtab') {
							$link_attr[] = 'target="_blank"';
						}
						if($item['val']['link'] === 'media'){
							$i_link = $item['val']['fallback_s'] === 'yes' && $item['val']['fallback_i'] !== '' && !has_post_thumbnail() ? $item['val']['fallback_i'] : wp_get_attachment_url(get_post_thumbnail_id());
							$link_attr = array('class="themify_lightbox"');
						}
						else{
							if ($item['val']['open_link'] === 'lightbox') {
								$link_attr[] = 'class="themify_lightbox"';

								if (!empty($item['val']['lightbox_w']) || !empty($item['val']['lightbox_h'])) {
									$lightbox_settings = array();
									if ('' !== $item['val']['lightbox_w']) {
										$lightbox_settings[] = $item['val']['lightbox_w'] . $item['val']['lightbox_w_unit'];
									}
									if ('' !== $item['val']['lightbox_h']) {
										$lightbox_settings[] = $item['val']['lightbox_h'] . $item['val']['lightbox_h_unit'];
									}
									$link_attr[] = sprintf('data-zoom-config="%s"', implode('|', $lightbox_settings));
								}
							}
							if ($item['val']['link'] === 'permalink') {
								$attr = Tbp_Utils::getLinkParams($item['val']);
								$i_link = isset($attr['href']) ? $attr['href'] : '';
							} elseif ($item['val']['link'] === 'custom' && $item['val']['custom_link'] !== '') {
								$i_link = esc_url($item['val']['custom_link']);
							}
						}
						?>
						<a href="<?php echo $i_link; ?>" <?php echo implode(' ', $link_attr); ?>><meta itemprop="url"><?php echo $post_image; ?></a>
					<?php } ?>
				</figure>

				<?php
				themify_after_post_image(); // Hook
			}
			break;

		// Date
		case 'p_date':
			?>
			<div class="tbp_post_date">
				<?php if (isset($item['val']['before']) && '' !== $item['val']['before']): ?>
					<span class="tbp_post_meta_before"><?php echo $item['val']['before'] ?></span>
				<?php endif; ?>
				<?php self::retrieve_template('partials/date.php', array_merge(array('type' => 'date'), $item), $TBP_DIR); ?>
				<?php if (isset($item['val']['after']) && '' !== $item['val']['after']): ?>
					<span class="tbp_post_meta_after"><?php echo $item['val']['after']; ?></span>
				<?php endif; ?>
			</div>
			<?php
			break;

		// Post Meta
		case 'p_meta':
			self::retrieve_template('partials/meta.php', array('meta' => $item['val']['tab_content_post_meta']), $TBP_DIR);
			break;

		// Content
		case 'cont':
			self::retrieve_template('partials/content.php', $item['val'], $TBP_DIR);
			break;
	}
}
$args = null;
