<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/sOneClient/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/soneclient')) {
            $cache->deleteTree(
                $dev . 'assets/components/soneclient/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/soneclient/', $dev . 'assets/components/soneclient');
        }
        if (!is_link($dev . 'core/components/soneclient')) {
            $cache->deleteTree(
                $dev . 'core/components/soneclient/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/soneclient/', $dev . 'core/components/soneclient');
        }
    }
}

return true;