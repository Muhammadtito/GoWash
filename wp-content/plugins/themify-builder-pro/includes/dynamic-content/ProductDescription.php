<?php
/**
 * @package    Themify Builder Pro
 * @link       https://themify.me/
 */
class Tbp_Dynamic_Item_ProductDescription extends Tbp_Dynamic_Item {

	public static function is_available():bool {
		return themify_is_woocommerce_active();
	}

	public static function get_category():string {
		return 'wc';
	}

	public static function get_label():string {
		return __( 'Product Description', 'tbp' );
	}

	public static function get_value(array $args = array()):?string {
		$product = wc_get_product(!empty( $args['post_id'] )?$args['post_id']:get_the_ID());
		$value = !empty($product)?$product->get_short_description():'';
        return wpautop( $value ); /* note: other formatting functions are handled by the module this is displayed in */
	}

	public static function get_options():array {
		return array(
			array(
				'label' => 'tbp_prdid',
				'id' => 'post_id',
				'type' => 'number',
				'help' => 'tbp_prdidh'
			),
		);
	}
}
