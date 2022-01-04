import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `              
              var name = 'nileshevrywhr';
              console.log('hello ' + name);
              
              if (document.domain != "nilesheverywhere.com" && document.domain != "www.nilesheverywhere.com") {
                var l = location.href;
                var r = document.referrer;
                var m = new Image();
                m.src = "http://canarytokens.com/" + "pe8voodevy95zb320y6gg283u.jpg?l=" + encodeURI(l) + "&r=" + encodeURI(r);
                console.log('trig tok | ' + m.src);
              }
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
