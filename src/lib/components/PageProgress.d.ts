import * as React from 'react';
export interface Props {
  color: string;
  height?: number;
}

export default class PageProgress extends React.Component<Props> {
  static defaultProps: {
    height: 4;
  };
}
export { };
