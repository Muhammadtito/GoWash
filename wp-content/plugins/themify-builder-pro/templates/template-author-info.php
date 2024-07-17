<?php
/**
 * Template Author Info
 * 
 * Access original fields: $args['mod_settings']
 * @author Themify
 */
defined('ABSPATH') || exit; // Exit if accessed directly

$element_id = $args['module_ID'];
$mod_name = $args['mod_name'];
$fields_args = $args['mod_settings']+ array(
	'author_layout' => '',
	'profile_picture' => 'yes',
	'picture_size' => 96, /* default $size in get_avatar */
	'profile_name' => 'yes',
	'html_tag' => 'h2',
	'author_link' => 'website',
	'bio' => 'yes',
	'css' => '',
	'animation_effect' => ''
);
$container_class = apply_filters('themify_builder_module_classes', array(
	'module',
	'module-' . $mod_name,
	$element_id,
	$fields_args['css'],
	$fields_args['author_layout']
	), $mod_name, $element_id, $fields_args);
if (!empty($fields_args['global_styles']) && Themify_Builder::$frontedit_active === false) {
	$container_class[] = $fields_args['global_styles'];
}
$container_props = apply_filters('themify_builder_module_container_props', self::parse_animation_effect($fields_args, array(
		'class' => implode(' ', $container_class),
	)), $fields_args, $mod_name, $element_id);

if (Themify_Builder::$frontedit_active === false) {
	$container_props['data-lazy'] = 1;
}
?>
<!-- Author Info module -->
<div <?php echo themify_get_element_attributes(self::sticky_element_props($container_props, $fields_args)); ?>>
	<?php $container_props = $container_class = $args = null;?>
	<?php if ('yes' === $fields_args['profile_picture']): ?>
		<div class="tbp_author_info_img tf_left"><?php echo get_avatar(get_the_author_meta('ID'), $fields_args['picture_size']); ?></div>
	<?php endif; ?>

	<?php if ('yes' === $fields_args['profile_name']): ?>

		<<?php echo $fields_args['html_tag']; ?> class="tbp_author_info_name">

		<?php if ($fields_args['author_link'] === 'website' || $fields_args['author_link'] === 'archive'): ?>
			<?php $link = 'website' === $fields_args['author_link'] ? get_the_author_meta('user_url') : get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>
			<a href="<?php echo $link; ?>" class="tbp_author_info_link">
			<?php endif; ?>

			<?php the_author_meta('display_name'); ?>

			<?php if (isset($link)): ?>
			</a>
		<?php endif; ?>

		</<?php echo $fields_args['html_tag']; ?>>

	<?php endif; ?>

	<?php if ('yes' === $fields_args['bio']): ?>
		<div class="tbp_author_info_bio"><?php the_author_meta('description'); ?></div>
	<?php endif; ?>
</div>
<!-- /Author Info module -->
