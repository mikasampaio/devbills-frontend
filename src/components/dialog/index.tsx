import { Root, Trigger, Content, Overlay, Portal } from './styles';

type DialogProps = {
  children: React.ReactNode;
  trigger: JSX.Element;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};
export default function Dialog({
  children,
  trigger,
  isOpen,
  onOpenChange,
}: DialogProps) {
  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
