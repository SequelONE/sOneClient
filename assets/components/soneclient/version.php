<?php
define('MODX_API_MODE', true);
require_once($_SERVER['DOCUMENT_ROOT'].'/index.php');
$modx=new modX();
$modx->initialize('web');

// Включаем обработку ошибок
$modx->getService('error','error.modError');
$modx->setLogLevel(modX::LOG_LEVEL_INFO);
$modx->setLogTarget(XPDO_CLI_MODE ? 'ECHO' : 'HTML');

$url = 'https://api.github.com/repos/modxcms/revolution/tags';
$cURL = curl_init();

curl_setopt($cURL, CURLOPT_URL, $url);
curl_setopt($cURL, CURLOPT_HTTPGET, true);
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, true);

curl_setopt($cURL, CURLOPT_HTTPHEADER, array(
    'User-Agent: Awesome-Octocat-App'
));

$result = curl_exec($cURL);

curl_close($cURL);

$json = json_decode($result, true);

foreach($json as $key => $value) {
    if($key == 0) {
        $new_version = str_replace(array('v'), '', trim($value['name']));
    }
}

include MODX_CORE_PATH . 'docs/version.inc.php';

$version = $v['version'];
$major = $v['major_version'];
$minor = $v['minor_version'];
$patch_level = $v['patch_level'];

$full_version = $version.'.'.$major.'.'.$minor.'-'.$patch_level;

$path = MODX_BASE_PATH;

$modxversion = array();

$modxversion = array(
    "site_modx_version" => $full_version,
    "new_modx_version" => $new_version,
    "path" => $path
);

echo json_encode($modxversion, JSON_PRETTY_PRINT);