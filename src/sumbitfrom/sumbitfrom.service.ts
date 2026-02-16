import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import {
  Sumbitfrom,
  SumbitfromDocument,
} from './entities/sumbitfrom.entity';
import { CreateSumbitfromDto } from './dto/create-sumbitfrom.dto';

@Injectable()
export class SumbitfromService {
  constructor(
    @InjectModel(Sumbitfrom.name)
    private readonly sumbitfromModel: Model<SumbitfromDocument>,
  ) {}

  // ✅ Create + Save + Send Mail
  async create(dto: CreateSumbitfromDto) {
    const savedData = await this.sumbitfromModel.create(dto);

    await this.sendMail(dto);

    return {
      success: true,
      message: 'Form submitted successfully',
      data: savedData,
    };
  }

  // ✅ Professional Email Template
  async sendMail(data: CreateSumbitfromDto) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"QuickAdvisor" <${process.env.MAIL_USER}>`,
      to: 'vineetvineet8006@gmail.com',
      subject: '📩 New Client Inquiry - QuickAdvisor',

      html: `
      <div style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
          <tr>
            <td align="center">
              
              <table width="600" cellpadding="0" cellspacing="0" 
              style="background:#ffffff;border-radius:8px;overflow:hidden;
              box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                
                <!-- Header -->
                <tr>
                  <td style="background:#1e293b;padding:20px;text-align:center;">
                    <h2 style="color:#ffffff;margin:0;">QuickAdvisor</h2>
                    <p style="color:#cbd5e1;margin:5px 0 0 0;font-size:14px;">
                      New Client Inquiry Received
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:25px;">
                    
                    <table width="100%" cellpadding="8" cellspacing="0" 
                    style="border-collapse:collapse;font-size:14px;">
                      
                      <tr style="background:#f8fafc;">
                        <td><strong>Full Name</strong></td>
                        <td>${data.fullName}</td>
                      </tr>

                      <tr>
                        <td><strong>Email Address</strong></td>
                        <td>${data.email}</td>
                      </tr>

                      <tr style="background:#f8fafc;">
                        <td><strong>Company Name</strong></td>
                        <td>${data.companyName || '-'}</td>
                      </tr>

                      <tr>
                        <td><strong>Phone Number</strong></td>
                        <td>${data.telephoneNumber || '-'}</td>
                      </tr>

                      <tr style="background:#f8fafc;">
                        <td><strong>Location</strong></td>
                        <td>${data.location || '-'}</td>
                      </tr>

                      <tr>
                        <td><strong>Selected Area</strong></td>
                        <td>${data.selectArea || '-'}</td>
                      </tr>

                      <tr style="background:#f8fafc;">
                        <td><strong>Service Required</strong></td>
                        <td>${data.helpType || '-'}</td>
                      </tr>

                      <tr>
                        <td><strong>Consent Given</strong></td>
                        <td>${data.consent ? 'Yes' : 'No'}</td>
                      </tr>

                    </table>

                    <div style="margin-top:20px;">
                      <strong>Message:</strong>
                      <p style="margin-top:8px;padding:12px;background:#f1f5f9;border-radius:6px;">
                        ${data.message || '-'}
                      </p>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f1f5f9;padding:15px;text-align:center;
                  font-size:12px;color:#64748b;">
                    This email was generated automatically from the QuickAdvisor website.<br/>
                    © ${new Date().getFullYear()} QuickAdvisor. All rights reserved.
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </div>
      `,
    });
  }
}
