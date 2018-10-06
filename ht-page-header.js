"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/paper-icon-button";
import "@polymer/paper-button";

class HTPageHeader extends LitElement {
  render() {
    const { text, backURL, actionButtonURL, actionButtonText } = this;
    return html`
    ${SharedStyles}
    <style>
        a {
            display: block;
            color: inherit;
        }

        a:hover {
            text-decoration: none;
        }
    
        paper-icon-button {
            margin-right:8px;
            width:42px;
            height:42px;
        }

        #container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
        }

        #header {
            display: flex;
            align-items:center;
        }

        #action {
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
        }
    </style>
    <iron-iconset-svg size="24" name="ht-page-header-icons">
        <svg>
            <defs>
                <g id="arrow-back">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </g>
            </defs>
        </svg>
    </iron-iconset-svg>
    <div id="container">
        <div id="header">
            <a href=${backURL} ?hidden=${!backURL}>
                <paper-icon-button icon="ht-page-header-icons:arrow-back"></paper-icon-button>
            </a>
            <h1 class="mdc-typography--headline5">${text}</h1>
        </div>
        <div id="action">
            <a href=${actionButtonURL} ?hidden=${!actionButtonText}>
                <paper-button raised>${actionButtonText}</paper-button>
            </a>
        </div>
    </div>`;
  }

  static get is() {
    return "ht-page-header";
  }

  static get properties() {
    return {
      text: { type: String },
      backURL: { type: String },
      actionButtonURL: { type: String },
      actionButtonText: { type: String }
    };
  }
}

customElements.define(HTPageHeader.is, HTPageHeader);
