import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne} from "typeorm"

  import {v4 as uuid } from "uuid";
  import { User } from "./Users";

  @Entity("connections")
  class Connection {

    @PrimaryColumn()
    id: string;

    @Column()
    socket_id: string;

    @Column()
    admin_id: string;

    @JoinColumn({ name:"user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor() {
      if(!this.id) {
        this.id = uuid();
      }
    }

  }

  export { Connection }