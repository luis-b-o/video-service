interface CategoryProps {
  name: string;
  description?: string;
  isActive?: boolean;
  createdAt?: Date;
}

export class Category {
  constructor(public readonly props: CategoryProps) {
    this.description = this.props.description;
    this.isActive = this.props.isActive ?? true;
    this.createdAt = this.props.createdAt ?? new Date();
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  private set isActive(value: boolean) {
    this.props.isActive = value;
  }

  private set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  get name() {
    return this.props.name;
  }
  get description() {
    return this.props.description;
  }
  get isActive() {
    return this.props.isActive;
  }
  get createdAt() {
    return this.props.createdAt;
  }
}
