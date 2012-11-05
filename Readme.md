
# widget-init

  initialises widgets bound to DOM elements through a data-attribute hook

## Installation

    $ component install carlmw/widget-init

## Example

    <div data-require="test-widget">Target Element</div>
    <script>
    require.register("test-widget", function(module){
      module.exports = function (el, dataset) {
        // Do something
      };
    });
    </script>
    <script>
    require('widget-init')(document);
    </script>


## License

  MIT
