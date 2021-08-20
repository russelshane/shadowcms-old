import styled from "styled-components";

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
