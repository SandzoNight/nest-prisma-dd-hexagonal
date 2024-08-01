import { DomainEvent, DomainEventProps } from '@libs/ddd';

export class MemberCreatedDomainEvent extends DomainEvent {
  readonly name: string;

  readonly email: string;

  constructor(props: DomainEventProps<MemberCreatedDomainEvent>) {
    super(props);
    this.email = props.email;
  }
}
