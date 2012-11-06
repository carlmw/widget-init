
# widget-init

  initialises widgets bound to DOM elements through a data-attribute hook

## Installation

    $ component install carlmw/widget-init

## Example

    <div id="target" data-require="test-widget" data-foo-bar="baz">Target Element</div>
    <script>
    require.register("test-widget", function(module){
      module.exports = function (el, dataset) {
        // el => div#target
        // dataset => {fooBar: "baz", require: "test-widget"}
      };
    });
    </script>
    <script>
    require('widget-init')(document);
    </script>


## License

  MIT
