<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ufi91i6l_udo' );

/** Database username */
define( 'DB_USER', 'ufi91i6l_udo' );

/** Database password */
define( 'DB_PASSWORD', 'x78@4p-SKp' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd5pfjia03uihl60i6tclcwma8kskgqmazoufuzfr3ykoxfrzwhvbyzhpgi7oyay2' );
define( 'SECURE_AUTH_KEY',  'lwkcs6vrgwkoekvk3wmv5srul2zu1sjafrpaycjwgoodzeat6xqpxxewzw4cbhjs' );
define( 'LOGGED_IN_KEY',    'zk4yv0owrn7radm4jsa64rkwbrfdu8ay0kzwk0pmsbjiezmizjz0r8tnnibwamsy' );
define( 'NONCE_KEY',        'sbc4b2fsp8xlpu8zobekdfmxpvo4hlivgsyuf01a0qgvvdbzzuoxcxlwmse8whml' );
define( 'AUTH_SALT',        'dj2xlmmxk3xmrv92padyvogwua5rjccgm0nzk1tacygnrgheacs3s3klokqp4okj' );
define( 'SECURE_AUTH_SALT', 'z6kdetdetp0qrs3qnvejkkvqaofscaj1mj0kwhuzhmw9ovtiq9y19wc4ehceiiri' );
define( 'LOGGED_IN_SALT',   'vz1575yoqiqpizjw7zht3zrufnubrwheupe8kfrcgqhj0gxarvfr8qcxct8imfq4' );
define( 'NONCE_SALT',       '3didoiso1vamhj9lolbe661xuetvehspn4juzrdxwgajmh5byc9rpyqg92hxuxka' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpmn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
