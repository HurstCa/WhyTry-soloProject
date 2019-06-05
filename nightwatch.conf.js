const properties = require('./nightwatch.props')
module.exports = {
    "src_folders" : "tests",
    "page_objects_path" : "pageObjects",
    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver" : properties.resourcePath + properties.chromedriver,
        "webdriver.gecko.driver" : properties.resourcePath + properties.geckodriver,
        "webdriver.edge.driver" : properties.resourcePath + properties.edgedriver,
      }
    },
  
    "test_settings" : {
      "test_workers": true,
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
  
      "chromeMobile" : {
        "desiredCapabilities": {
          "browserName": "chrome",
          "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "chromeOptions": {"mobileEmulation": {
        "deviceMetrics": {"width": 360, "height": 640, "pixelRatio": 3},
        "userAgent":
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Mobile Safari/537.36 profi-autotest',
          }
      }
        }
      }
    }
  }