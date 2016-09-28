'use strict'

import React from 'react'
import {render, findDOMNode} from 'react-dom'
import keydown from 'react-keydown'
import ReactTooltip from '../../src'

const Test = React.createClass({

  getInitialState () {
    return {
      frozen:false
    }
  },

  @keydown('f')
  togglefrozen() {
    this.setState((previousState)=> {
      return {
        frozen:!previousState.frozen
      }
    })
  },

  render () {
    return (
      <div>
        <section className='example-pre'>
          <div>
            <div className="example-jsx">
              <div className="side"><a data-tip data-for='global'> σ`∀´)σ </a></div>
              <div className="side"><a data-tip data-for='global'> (〃∀〃) </a></div>
              <ReactTooltip id='global' aria-haspopup="true" role="example" frozen={this.state.frozen}>
                <p>This is a global react component tooltip</p>
                <p>You can put every thing here</p>
                <ul>
                  <li>Word</li>
                  <li>Chart</li>
                  <button onClick={()=>alert("Click!")}>{"Button"}</button>
                </ul>
                <p>Press f to freeze and unfreeze me</p>
              </ReactTooltip>
            </div>
            <pre className='example-pre'>
              <div>
                <p>{"<a data-tip data-for='global'> σ`∀´)σ </a>\n" +
                  "<a data-tip data-for='global'> (〃∀〃) </a>\n" +
                  "<ReactTooltip id='global' aria-haspopup='true' role='example'>\n" +
                    " <p>This is a global react component tooltip</p>\n" +
                    " <p>You can put every thing here</p>\n" +
                    " <ul>\n" +
                      " " + " " + " <li>Word</li>\n" +
                      " " + " " + " <li>Chart</li>\n" +
                    '<button onClick={()=>alert("Click!")}>{"Button"}</button>'+
                    " </ul>\n" +
                    " <p>Press f to freeze and unfreeze me</p>"+
                  "</ReactTooltip>"}
                  </p>
              </div>

            </pre>
          </div>
        </section>

      </div>
    )
  }
})

render(<Test />, document.getElementById('main'))
