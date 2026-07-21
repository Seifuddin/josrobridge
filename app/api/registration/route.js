import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Create email content
    const emailContent = generateEmailContent(formData);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'JosroBridge <onboarding@resend.dev>', // Replace with your domain
      to: ['info@josrobridge.com'],
      subject: `New Registration: ${formData.personalInfo.fullName}`,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Registration submitted successfully!',
      data 
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit registration' },
      { status: 500 }
    );
  }
}

function generateEmailContent(data) {
  const { personalInfo, academicInfo, studyPreferences, englishProficiency, passportSponsorship, additionalInfo } = data;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a3a6b; color: white; padding: 20px; text-align: center; }
        .section { background: #f5f5f5; margin: 20px 0; padding: 15px; border-radius: 5px; }
        .section h3 { color: #1a3a6b; margin-top: 0; border-bottom: 2px solid #e67e22; padding-bottom: 10px; }
        .field { margin: 10px 0; }
        .field strong { display: inline-block; min-width: 150px; }
        .footer { background: #1a3a6b; color: white; padding: 15px; text-align: center; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>JosroBridge International Limited</h1>
          <h2>Student Registration Form</h2>
        </div>

        <div class="section">
          <h3>Step 1 – Personal Information</h3>
          <div class="field"><strong>Full Name:</strong> ${personalInfo.fullName}</div>
          <div class="field"><strong>Date of Birth:</strong> ${personalInfo.dateOfBirth}</div>
          <div class="field"><strong>Gender:</strong> ${personalInfo.gender}</div>
          <div class="field"><strong>Nationality:</strong> ${personalInfo.nationality}</div>
          <div class="field"><strong>National ID/Passport:</strong> ${personalInfo.nationalId}</div>
          <div class="field"><strong>Phone Number:</strong> ${personalInfo.phoneNumber}</div>
          <div class="field"><strong>WhatsApp Number:</strong> ${personalInfo.whatsappNumber || 'N/A'}</div>
          <div class="field"><strong>Email Address:</strong> ${personalInfo.email}</div>
          <div class="field"><strong>Residential Address:</strong> ${personalInfo.residentialAddress}</div>
        </div>

        <div class="section">
          <h3>Step 2 – Academic Background</h3>
          <div class="field"><strong>Highest Qualification:</strong> ${academicInfo.highestQualification}</div>
          <div class="field"><strong>Institution Name:</strong> ${academicInfo.institutionName}</div>
          <div class="field"><strong>Year Completed:</strong> ${academicInfo.yearCompleted}</div>
          <div class="field"><strong>KCSE Grade:</strong> ${academicInfo.kcseGrade || 'N/A'}</div>
          <div class="field"><strong>GPA/Grade:</strong> ${academicInfo.gpa || 'N/A'}</div>
          <div class="field"><strong>Current Occupation:</strong> ${academicInfo.currentOccupation}</div>
        </div>

        <div class="section">
          <h3>Step 3 – Study Preferences</h3>
          <div class="field"><strong>Preferred Country:</strong> ${studyPreferences.preferredCountry}</div>
          <div class="field"><strong>Preferred Course:</strong> ${studyPreferences.preferredCourse}</div>
          <div class="field"><strong>Preferred University:</strong> ${studyPreferences.preferredUniversity || 'N/A'}</div>
          <div class="field"><strong>Intake:</strong> ${studyPreferences.intake}</div>
          <div class="field"><strong>Level of Study:</strong> ${studyPreferences.levelOfStudy}</div>
        </div>

        <div class="section">
          <h3>Step 4 – English Proficiency</h3>
          <div class="field"><strong>Have you taken IELTS?</strong> ${englishProficiency.hasIELTS}</div>
          ${englishProficiency.hasIELTS === 'yes' ? `<div class="field"><strong>IELTS Score:</strong> ${englishProficiency.ieltsScore || 'N/A'}</div>` : ''}
          <div class="field"><strong>Need IELTS Training?</strong> ${englishProficiency.needIELTSTraining}</div>
          <div class="field"><strong>Have you taken TOEFL?</strong> ${englishProficiency.hasTOEFL}</div>
        </div>

        <div class="section">
          <h3>Step 5 – Passport & Sponsorship</h3>
          <div class="field"><strong>Do you have a Passport?</strong> ${passportSponsorship.hasPassport}</div>
          ${passportSponsorship.hasPassport === 'yes' ? `<div class="field"><strong>Passport Number:</strong> ${passportSponsorship.passportNumber}</div>` : ''}
          <div class="field"><strong>Sponsor Name:</strong> ${passportSponsorship.sponsorName}</div>
          <div class="field"><strong>Relationship:</strong> ${passportSponsorship.relationship}</div>
          <div class="field"><strong>Sponsor Phone:</strong> ${passportSponsorship.sponsorPhone}</div>
          <div class="field"><strong>Estimated Budget:</strong> ${passportSponsorship.estimatedBudget}</div>
        </div>

        <div class="section">
          <h3>Step 6 – Additional Information</h3>
          <div class="field"><strong>Have you ever been denied a visa?</strong> ${additionalInfo.hasBeenDeniedVisa}</div>
          <div class="field"><strong>Have you studied abroad before?</strong> ${additionalInfo.hasStudiedAbroad}</div>
          <div class="field"><strong>Disabilities/Special Requirements:</strong> ${additionalInfo.disabilities || 'None'}</div>
          <div class="field"><strong>Anything else we should know?</strong> ${additionalInfo.otherInfo || 'None'}</div>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} JosroBridge International Limited</p>
          <p>Email: info@josrobridge.com | Phone: +254 720 823 950</p>
        </div>
      </div>
    </body>
    </html>
  `;
}