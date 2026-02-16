import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SumbitfromDocument = Sumbitfrom & Document;

@Schema({ timestamps: true })
export class Sumbitfrom {

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  companyName: string;

  @Prop()
  telephoneNumber: string;

  @Prop()
  location: string;

  // ✅ Enum removed (Now dynamic)
  @Prop()
  selectArea: string;

  // ✅ Enum removed (Now dynamic)
  @Prop()
  helpType: string;

  @Prop()
  message: string;

  @Prop({ default: false })
  consent: boolean;
}

export const SumbitfromSchema =
  SchemaFactory.createForClass(Sumbitfrom);
