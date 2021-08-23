/**
 * @description Mentions plugin (non-production) in-article
 * @author ShadowCMS
 */

import React from "react";
import styled from "styled-components";

export class MentionList extends React.Component {
  constructor(props: any) {
    super(props as any);

    this.state = {
      selectedIndex: 0,
    } as any;
  }

  componentDidUpdate(oldProps) {
    if ((this.props as any).items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        ((this.state as any).selectedIndex + (this.props as any).items.length - 1) %
        (this.props as any).items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex:
        ((this.state as any).selectedIndex + 1) % (this.props as any).items.length,
    });
  }

  enterHandler() {
    this.selectItem((this.state as any).selectedIndex);
  }

  selectItem(index) {
    const item = (this.props as any).items[index];

    if (item) {
      (this.props as any).command({ id: item });
    }
  }

  render() {
    return (
      <MentionItems>
        {(this.props as any).items.map((item, index) => (
          <button
            className={`item ${
              index === (this.state as any).selectedIndex ? "is-selected" : ""
            }`}
            key={index}
            onClick={() => this.selectItem(index)}
          >
            {item}
          </button>
        ))}
      </MentionItems>
    );
  }
}

export const MentionItems = styled.div`
  .items {
    position: relative;
    border-radius: 0.25rem;
    background: white;
    color: rgba(black, 0.8);
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .item {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0.2rem 0.5rem;

    &.is-selected,
    &:hover {
      color: #a975ff;
      background: rgba(#a975ff, 0.1);
    }
  }
`;
