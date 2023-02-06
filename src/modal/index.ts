import { Container } from './container';
import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Modal } from './modal';

export type { ModalProps } from './modal';

export { useModal } from './context';

export default Object.assign(Modal, { Container, Header, Content, Footer });
