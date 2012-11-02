
# widget-init

  initialises widgets bound to DOM elements

## Installation

    $ component install carlmw/widget-init

## Example

    <!doctype html>
    <html>
    <body>
      <div data-require="test-widget">Target Element</div>
      <script src="build/build.js"></script>
      <script src="test-widget.js"></script>
      <script>
      require('widget-init')(document);
      </script>
    </body>
    </html>


## License

  MIT
