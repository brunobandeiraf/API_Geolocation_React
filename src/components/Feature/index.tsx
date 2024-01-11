import React, { ReactElement, ReactNode } from 'react';
import { Container } from './styles';

interface FeatureProps {
  icon?: React.FC<{ size: number }>;
  title: string;
  [key: string]: any;
}

export function Feature({ icon: Icon, title, ...rest }: FeatureProps): ReactElement {
  return (
    <Container {...rest}>
      {Icon && <Icon size={42} />}

      <footer>
        {title}
      </footer>
    </Container>
  );
}
