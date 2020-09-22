import { css } from 'lit-element';
export default css
    `:host{
        --chip-font-family: var(--global-font-family);
        --chip-font-color: var(--secondary-text);
        --chip-font-weight: var(--font-weight-semi-bold);
        --chip-font-size: var(--caption-font-size);
        --chip-background-color: var(--neutral);
        --chip-height: 36px;
        --chip-max-width: 288px;
        --chip-default-border-color: var(--disabled-text-color);
        --chip-selected-border-color: var(--primary);
        --chip-selected-font-color: var(--primary);
        --border-radius: 2px;
    }
    .chips-container {
        background-color: #eee;
        white-space: nowrap;
        overflow: auto;
        padding: 5px;
    }
    .chips {  
        margin: 5px;
        cursor: pointer;
        padding: var(--spacing-04) var(--spacing-05);
        max-width: var(--chip-max-width);
        border: 1px solid var(--disabled-text);
        font-family: var(--chip-font-family);
        font-size: 1em;
        color: var(--chip-font-color);
        height: var(--chip-height);
        display: inline-flex;
        box-sizing: border-box;
        background-color: var(--chip-background-color);
        border-radius: var(--border-radius);
    }
    .chips.active {
        color: var(--chip-selected-font-color);
        border-color: var(--chip-selected-border-color);
        transition: cubic-bezier(0.42,0,0.58,0) 240ms;
    }
    .chips .chip-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // height: 20px;
        line-height: 10px;
        min-width: 50px;
    }
    .chips .count-label-container {
        -display: flex;
        justify-content: flex-end;
        // height: 20px;
        line-height: 10px;
    }
    .chips .count-label-container .count-label {
        text-align: right;
        font-weight: var(--chip-font-weight);
    }
    .chips-container::-webkit-scrollbar,
    .chips-container::-webkit-scrollbar-track,
    .chips-container::-webkit-scrollbar-thumb {
        display: none;
        animation-name: scroll-horizontal;
        animation-iteration-count: 1;
    }
    @keyframes scroll-horizontal{
        0%{
            transition: 240ms ease;
        }
        100%{
            transition: 80ms ease;
        }
    }
    `;

