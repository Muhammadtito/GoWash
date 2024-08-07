<?php
$product = wc_get_product(get_the_ID());
if(empty($product)){
	return;
}
$attachment_id = $product->get_image_id();
$html = '';
themify_product_image_start(); // Hook 
if (!empty($args['image_w']) || !empty($args['image_h'])) {
	$GLOBALS['post']->gallery_image_size_w = $args['image_w'];
	$GLOBALS['post']->gallery_image_size_h = $args['image_h'];
	global $themify;
	if (isset($themify)) {
		$themify_save = clone $themify;
		$themify->width = $args['image_w'];
		$themify->height = $args['image_h'];
	}
	add_filter('woocommerce_single_product_image_thumbnail_html', array('TB_Product_Image_Module', 'set_image_size_gallery'), 10, 2);
	add_filter('wp_get_attachment_image_attributes', array('TB_Product_Image_Module', 'remove_srcset'), 10, 1);
	$wrap_css = !empty($args['image_w']) ? sprintf('.%s .image-wrap { max-width: %spx }', $args['element_id'], $args['image_w']) : '';
	$wrap_css .= !empty($args['image_h']) ? sprintf('.%1$s .flex-viewport, .%1$s .product-images-carousel { max-height: %2$spx }', $args['element_id'], $args['image_h']) : '';
	$wrap_css = !empty($wrap_css) ? '<style>' . $wrap_css . '</style>' : '';
}
if (!empty($args['thumb_image_w']) || !empty($args['thumb_image_h'])) {
	$GLOBALS['post']->gallery_thumb_size_w = $args['thumb_image_w'];
	$GLOBALS['post']->gallery_thumb_size_h = $args['thumb_image_h'];
/*
	if (class_exists('Themify_WC',false)) {
		Themify_WC::$thumbImageSize = array($args['thumb_image_w'], $args['thumb_image_h']);
	}
 * 
 */
	add_filter('woocommerce_gallery_thumbnail_size', array('TB_Product_Image_Module', 'set_image_size_gallery_thumbnail'), 10, 2);
}
if (!empty($attachment_id)) {
	if (!empty($args['thumb_image_w']) || !empty($args['thumb_image_h'])) {
		// Generate the custom thumbnail size form main image
		TB_Product_Image_Module::get_product_image_thumbnail_html($args, $attachment_id, true);
	}
	$html = TB_Product_Image_Module::get_product_image_thumbnail_html($args, $attachment_id);
} elseif ($args['fallback_s'] === 'yes' && $args['fallback_i'] !== '') {
	//fallback
	$full_src = esc_url($args['fallback_i']);
	if (!Themify_Builder_Model::is_img_php_disabled()) {
		$image = themify_get_image(array(
			'src' => $full_src,
			'w' => $args['image_w'],
			'h' => $args['image_h']
		));
	} else {
		$image = '<img class="wp-post-image" src="' . $full_src . '" width="' . $args['image_w'] . '" height="' . $args['image_h'] . '">';
	}
	$html = '<div class="woocommerce-product-gallery__image">' . $image . '</div>';
}
$columns = apply_filters('woocommerce_product_thumbnails_columns', 4);
$wrapper_classes = apply_filters('woocommerce_single_product_image_gallery_classes', array(
	'woocommerce-product-gallery',
	'image-wrap',
	'woocommerce-product-gallery--' . ( $attachment_id ? 'with-images' : 'without-images' ),
	'woocommerce-product-gallery--columns-' . absint($columns),
	'images'
	));
if ($args['sale_b'] === 'yes') {
	Tbp_Utils::loadCssModules('sale_badge', TBP_WC_CSS_MODULES . 'sale-badge.css');
} else {
	/* hide the sales badge */
	$sale_badge_has_filter = has_filter('woocommerce_product_thumbnails', 'woocommerce_show_product_sale_flash');
	if ($sale_badge_has_filter !== false) {
		remove_filter('woocommerce_product_thumbnails', 'woocommerce_show_product_sale_flash', $sale_badge_has_filter);
	}
}
Tbp_Utils::loadCssModules('single_product_image', TBP_WC_CSS_MODULES . 'single-product-image.css');
?>
<div class="product <?php echo $args['sale_b'] === 'yes' ? ' sale-badge-' . $args['badge_pos'] : ''; ?>">
		<?php echo isset($wrap_css) ? $wrap_css : ''; ?>
		<?php if ($args['sale_b'] === 'yes'): ?>
			<?php woocommerce_show_product_sale_flash(); ?>
		<?php endif; ?>
		<div class="image-wrap <?php esc_attr_e(implode(' ', $wrapper_classes)); ?>" data-columns="<?php esc_attr_e($columns); ?>">
			<figure class="woocommerce-product-gallery__wrapper">
				<?php
				echo apply_filters('woocommerce_single_product_image_thumbnail_html', $html, $attachment_id);
				$html = null;
				?>
				<?php if (!empty($args['thumb_image_w']) || !empty($args['thumb_image_h'])): ?>
					<?php
					$attachment_ids = $product->get_gallery_image_ids();
					if ($attachment_ids && $product->get_image_id()) {
						foreach ($attachment_ids as $attachment_id) {
							// Generate custom image thumbnails
							TB_Product_Image_Module::get_product_image_thumbnail_html($args, $attachment_id, true); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped
						}
					}
					?>
				<?php endif; ?>
				<?php do_action('woocommerce_product_thumbnails'); ?>
			</figure>
		</div>
</div>
<?php
if (!empty($args['thumb_image_w']) || !empty($args['thumb_image_h'])) {
	unset($GLOBALS['post']->gallery_thumb_size_w, $GLOBALS['post']->gallery_thumb_size_h);
	remove_filter('woocommerce_gallery_thumbnail_size', array('TB_Product_Image_Module', 'set_image_size_gallery_thumbnail'));
}
if (!empty($wrap_css)) {
	remove_filter('woocommerce_single_product_image_thumbnail_html', array('TB_Product_Image_Module', 'set_image_size_gallery'), 10);
	remove_filter('wp_get_attachment_image_attributes', array('TB_Product_Image_Module', 'remove_srcset'), 10);
	$wrap_css = null;
	if (isset($themify_save)) {
		global $themify;
		$themify = clone $themify_save;
		$themify_save = null;
	}
}

/* restore the sales badge display for other products on the page */
if (isset($sale_badge_has_filter) && false !== $sale_badge_has_filter) {
	add_filter('woocommerce_product_thumbnails', 'woocommerce_show_product_sale_flash', $sale_badge_has_filter);
}

themify_product_image_end(); // Hook