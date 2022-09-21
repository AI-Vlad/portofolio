import { ReactNode } from 'react';
import { StackContainer } from './styles';

interface StackProps {
  title: string;
  icon: ReactNode;
}

export default function StackItem({ title, icon }: StackProps) {
  return (
    <StackContainer>
      <p>{title}</p>
      {icon}
    </StackContainer>
  );
}
