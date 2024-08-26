let basicHTML = (function () {
    let getBasicTagsHTML = function () {
      return `<ol class="table_list">
      <table>
        <tbody>
          <tr class="subheading">
            <td colspan="3" class="subheading_title">
              Below tags are basic common tags
            </td>
          </tr>
          <tr>
            <td class="row_number">1)</td>
            <td>
              <code> &lt;h1&gt; Heading &lt;/h1&gt; </code>
            </td>
            <td>
              <h1>Heading</h1>
            </td>
          </tr>
          <tr>
            <td class="row_number">2)</td>
            <td>
              <code> &lt;h2&gt; Heading2 &lt;/h2&gt; </code>
            </td>
            <td>
              <h2>Heading2</h2>
            </td>
          </tr>
          <tr>
            <td class="row_number">3)</td>
            <td>
              <code> &lt;h3&gt; Heading3 &lt;/h3&gt; </code>
            </td>
            <td>
              <h3>Heading3</h3>
            </td>
          </tr>
          <tr>
            <td class="row_number">4)</td>
            <td>
              <code> &lt;h4&gt; Heading4 &lt;/h4&gt; </code>
            </td>
            <td>
              <h4>Heading4</h4>
            </td>
          </tr>
          <tr>
            <td class="row_number">5)</td>
            <td>
              <code> &lt;h5&gt; Heading5 &lt;/h5&gt; </code>
            </td>
            <td>
              <h5>Heading5</h5>
            </td>
          </tr>
          <tr>
            <td class="row_number">6)</td>
            <td>
              <code> &lt;h6&gt; Heading6 &lt;/h6&gt; </code>
            </td>
            <td>
              <h6>Heading6</h6>
            </td>
          </tr>
          <tr>
            <td class="row_number">7)</td>
            <td>
              <code> &lt;i&gt; italic text &lt;/i&gt; </code>
            </td>
            <td>
              <i> italic text </i>
            </td>
          </tr>
          <tr>
            <td class="row_number">8)</td>
            <td>
              <code> &lt;b&gt; bold content &lt;/b&gt; </code>
            </td>
            <td>
              <b> bold content </b>
            </td>
          </tr>
          <tr>
            <td class="row_number">9)</td>
            <td>
              <code>
                &lt;s&gt; strike through &lt;/s&gt; 
              </code>
            </td>
            <td>
              <s> strike through </s>
            </td>
          </tr>
          <tr>
            <td class="row_number">10)</td>
            <td>
              <code> a squared is writted as a&lt;sup&gt;2&lt;/sup&gt; </code>
            </td>
            <td>a squared is writted as a<sup>2</sup></td>
          </tr>
          <tr>
            <td class="row_number">11)</td>
            <td>
              <code> water is written as h&lt;sub&gt;2&lt;/sub&gt;o </code>
            </td>
            <td>water is written as h<sub>2</sub>o</td>
          </tr>
          <tr>
            <td class="row_number">12)</td>
            <td>
              <code>
                &lt;p&gt;this paragraph is to show paragraph &lt;br/&gt;
                break&lt;/p&gt;
              </code>
            </td>
            <td>
              <p>
                this paragraph is to show paragraph <br />
                break
              </p>
            </td>
          </tr>
          <tr>
            <td class="row_number">13)</td>
            <td>
              <code>
                <span>this is for a horizontal line:</span> &nbsp; &lt;hr/&gt;
              </code>
            </td>
            <td>
              <hr />
            </td>
          </tr>
        </tbody>
      </table>
      <table class="numbering">
        <thead>
          <tr class="subheading">
            <td colspan="3" class="subheading_title">
              Below tags are basic common tags
            </td>
          </tr>
        </thead>
        <tbody class="numbering_rows">
          <tr>
            <td>
              &lt;strong&gt; To strongly recommend something use this tag... Do
              not use this tag instead of bold tag &lt;/strong&gt;
            </td>
            <td>
              <strong
                >To strongly recommend something use this tag... Do not use this
                tag instead of bold tag</strong
              >
            </td>
          </tr>
          <tr>
            <td>
              &lt;em&gt;To emphasis something use this tag... Do not use <br />
              this tag instead of italic tag&lt;/em&gt;
            </td>
            <td>
              <em
                >To emphasis something use this tag... Do not use this tag instead
                of italic tag</em
              >
            </td>
          </tr>
          <tr>
            <td>
              &lt;q&gt;This is to show something inside the quotes&lt;/q&gt;
            </td>
            <td>
              <q>This is to show something inside the quotes</q>
            </td>
          </tr>
          <tr>
            <td>
              &lt;blockquote&gt;This tag is used to show text withsome indentation
              for a very long content like paragraph with multiple lines
              &lt;/blockquote&gt;
            </td>
            <td>
              <blockquote>
                This tag is used to show text with some indentation for a very
                long content like paragraph with multiple lines
              </blockquote>
            </td>
          </tr>
          <tr>
            <td>
              This tag is used to show <br />
              abbreviation like &lt;abbr&gt;ISRO&lt;/abbr&gt;
            </td>
            <td>This tag is used to show abbreviation like <abbr>ISRO</abbr></td>
          </tr>
          <tr>
            <td>
              Content is taken from &lt;cite&gt;
              https://www.google.com&lt;/cite&gt;
            </td>
            <td>Content is taken from <cite> https://www.google.com</cite></td>
          </tr>
          <tr>
            <td>
              &lt;dfn&gt;This tag is used for defining something&lt;/dfn&gt;
            </td>
            <td>
              <dfn>This tag is used for defining something</dfn>
            </td>
          </tr>
          <tr>
            <td>
              &lt;address&gt; something@gmail.com&lt;/address&gt; &lt;/p&gt;
            </td>
            <td>
              <address>something@gmail.com</address>
            </td>
          </tr>
          <tr>
            <td>
              &lt;p&gt; to change something on the page directly try using this
              &lt;br/&gt; the price is
              &lt;del&gt;$500&lt;/del&gt;&lt;ins&gt;$400&lt;/ins&gt; &lt;/p&gt;
            </td>
            <td>
              <p>
                to change something on the page directly try using this <br />
                the price is <del>$500</del><ins>$400</ins>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </ol>`;
    };
  
    return {
        getBasicTagsHTML,
    };
  })();
  
  export { basicHTML };
  