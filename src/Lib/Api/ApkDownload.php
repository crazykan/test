<?php

namespace Lib\Api;

/**
 * Lib\Api\ApkDownload
 * 
 * __DESCRIPTION__
 *
 * @package namespace Lib\Api;
 * @category ApkDownload
 * @author store Anthony Pillos <dev.anthonypillos@gmail.com>
 * @copyright Copyright (c) 2017
 * @version v1
 */

use Cache;
use Carbon\Carbon;
use Symfony\Component\DomCrawler\Crawler;
use Campo\UserAgent;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;
use Exception;
use Logger;

use Lib\Traits\ResponseTrait;

class ApkDownload
{

    use ResponseTrait;


    private $webClient;
    private $appId;

    /**
    * __construct()
    * Initialize our Class Here for Dependecy Injection
    *
    * @return void
    * @access  public
    **/
    public function __construct()
    {

        $this->referer = 'https://www.google.com';

        $this->webClient = new Client(array(
            'headers' => ['User-Agent' => UserAgent::random(),
                            'Referer' => $this->referer,
                            'Accept-Encoding' => 'gzip, deflate',
                            'Accept' => 'text/html,application/xhtml+xml,application/xml'
                        ]
        ));
    }

    /**
    * download()
    * 
    * @return void
    * @access  public
    **/
    public function download($appId)
    {

        try {
            
            $this->appId = $appId;
            $that = $this;
            $apkResponse = $that->source();
            return $apkResponse;

        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    private function source()
    {
        $url = 'http://apkleecher.com/download/dl.php?dl='.$this->appId;
        
        $response = $this->webClient->get($url);
        $content = $response->getBody()->getContents();
        $crawler = new Crawler($content);

        $appTitle = $crawler->filter('.row-offcanvas img')->count() > 0 ? $crawler->filter('.row-offcanvas img')->attr('alt') : $this->appId;

        preg_match('"../apps([^\\"]+)"', $content, $link);
        
        if(isset($link[1]))
        {

            $appTitle = str_slug($appTitle);
            $finalDlLink = 'http://apkleecher.com/apps/'.$link[1];
            
            $result =  [
                'app_title'   => trim($appTitle).'.apk',
                'dl_link'     => $finalDlLink,
                'referer_url' => 'http://apkleecher.com',
                'user_agent'  => UserAgent::random()
            ];
            return $result;
        }
        
        throw new Exception("No apk found.", 1);
        
    }
}