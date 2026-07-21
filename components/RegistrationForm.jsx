"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, User, GraduationCap, BookOpen, Globe, FileText, Info, Upload } from "lucide-react";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  
  // Form data state
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      nationalId: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      residentialAddress: "",
    },
    academicInfo: {
      highestQualification: "",
      institutionName: "",
      yearCompleted: "",
      kcseGrade: "",
      gpa: "",
      currentOccupation: "",
    },
    studyPreferences: {
      preferredCountry: "",
      preferredCourse: "",
      preferredUniversity: "",
      intake: "",
      levelOfStudy: "",
    },
    englishProficiency: {
      hasIELTS: "",
      ieltsScore: "",
      needIELTSTraining: "",
      hasTOEFL: "",
    },
    passportSponsorship: {
      hasPassport: "",
      passportNumber: "",
      sponsorName: "",
      relationship: "",
      sponsorPhone: "",
      estimatedBudget: "",
    },
    additionalInfo: {
      hasBeenDeniedVisa: "",
      hasStudiedAbroad: "",
      disabilities: "",
      otherInfo: "",
    }
  });

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/registration", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        // Reset form
        setFormData({
          personalInfo: {
            fullName: "",
            dateOfBirth: "",
            gender: "",
            nationality: "",
            nationalId: "",
            phoneNumber: "",
            whatsappNumber: "",
            email: "",
            residentialAddress: "",
          },
          academicInfo: {
            highestQualification: "",
            institutionName: "",
            yearCompleted: "",
            kcseGrade: "",
            gpa: "",
            currentOccupation: "",
          },
          studyPreferences: {
            preferredCountry: "",
            preferredCourse: "",
            preferredUniversity: "",
            intake: "",
            levelOfStudy: "",
          },
          englishProficiency: {
            hasIELTS: "",
            ieltsScore: "",
            needIELTSTraining: "",
            hasTOEFL: "",
          },
          passportSponsorship: {
            hasPassport: "",
            passportNumber: "",
            sponsorName: "",
            relationship: "",
            sponsorPhone: "",
            estimatedBudget: "",
          },
          additionalInfo: {
            hasBeenDeniedVisa: "",
            hasStudiedAbroad: "",
            disabilities: "",
            otherInfo: "",
          }
        });
        setStep(1);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return <AcademicInfo formData={formData} handleChange={handleChange} />;
      case 3:
        return <StudyPreferences formData={formData} handleChange={handleChange} />;
      case 4:
        return <EnglishProficiency formData={formData} handleChange={handleChange} />;
      case 5:
        return <PassportSponsorship formData={formData} handleChange={handleChange} />;
      case 6:
        return <AdditionalInfo formData={formData} handleChange={handleChange} />;
      case 7:
        return <UploadDocuments />;
      default:
        return null;
    }
  };

  const getStepIcon = (stepNumber) => {
    const icons = {
      1: <User size={20} />,
      2: <GraduationCap size={20} />,
      3: <BookOpen size={20} />,
      4: <Globe size={20} />,
      5: <FileText size={20} />,
      6: <Info size={20} />,
      7: <Upload size={20} />,
    };
    return icons[stepNumber];
  };

  const getStepTitle = (stepNumber) => {
    const titles = {
      1: "Personal Information",
      2: "Academic Background",
      3: "Study Preferences",
      4: "English Proficiency",
      5: "Passport & Sponsorship",
      6: "Additional Information",
      7: "Upload Documents",
    };
    return titles[stepNumber];
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
            <h2 className="text-2xl font-bold">JosroBridge International Limited</h2>
            <p className="text-blue-200 mt-1">Student Registration Form</p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 pt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="px-6 pt-4 pb-2 flex justify-between">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    stepNum === step 
                      ? 'bg-orange-500 text-white' 
                      : stepNum < step 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNum < step ? <Check size={16} /> : stepNum}
                </div>
                <span className="text-xs mt-1 text-gray-600 hidden sm:block">
                  {getStepTitle(stepNum).split(' ').slice(0, 2).join(' ')}
                </span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getStepTitle(step)}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Please fill in all required fields marked with *
              </p>
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border transition ${
                  step === 1 
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                disabled={step === 1}
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              {step === totalSteps ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-xl font-medium transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-2.5 rounded-xl font-medium transition"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                ✅ Registration submitted successfully! We'll contact you shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                ❌ Something went wrong. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// Step 1: Personal Information Component
function PersonalInfo({ formData, handleChange }) {
  const fields = [
    { label: "Full Name", field: "fullName", type: "text", required: true },
    { label: "Date of Birth", field: "dateOfBirth", type: "date", required: true },
    { label: "Gender", field: "gender", type: "select", options: ["Male", "Female", "Other"], required: true },
    { label: "Nationality", field: "nationality", type: "text", required: true },
    { label: "National ID/Passport Number", field: "nationalId", type: "text", required: true },
    { label: "Phone Number", field: "phoneNumber", type: "tel", required: true },
    { label: "WhatsApp Number (optional)", field: "whatsappNumber", type: "tel", required: false },
    { label: "Email Address", field: "email", type: "email", required: true },
    { label: "Residential Address", field: "residentialAddress", type: "text", required: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map(({ label, field, type, options, required }) => (
        <div key={field} className={field === 'residentialAddress' ? 'md:col-span-2' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {type === 'select' ? (
            <select
              value={formData.personalInfo[field]}
              onChange={(e) => handleChange('personalInfo', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
            >
              <option value="">Select {label}</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={formData.personalInfo[field]}
              onChange={(e) => handleChange('personalInfo', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
              placeholder={`Enter ${label}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Step 2: Academic Background Component
function AcademicInfo({ formData, handleChange }) {
  const fields = [
    { label: "Highest Qualification", field: "highestQualification", type: "select", options: ["High School", "Diploma", "Bachelor's", "Master's", "PhD", "Other"], required: true },
    { label: "Institution Name", field: "institutionName", type: "text", required: true },
    { label: "Year Completed", field: "yearCompleted", type: "number", required: true },
    { label: "KCSE Grade (if applicable)", field: "kcseGrade", type: "text", required: false },
    { label: "GPA/Grade (optional)", field: "gpa", type: "text", required: false },
    { label: "Current Occupation", field: "currentOccupation", type: "text", required: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map(({ label, field, type, options, required }) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {type === 'select' ? (
            <select
              value={formData.academicInfo[field]}
              onChange={(e) => handleChange('academicInfo', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
            >
              <option value="">Select {label}</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={formData.academicInfo[field]}
              onChange={(e) => handleChange('academicInfo', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
              placeholder={`Enter ${label}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Step 3: Study Preferences Component
function StudyPreferences({ formData, handleChange }) {
  const fields = [
    { label: "Preferred Country", field: "preferredCountry", type: "text", required: true },
    { label: "Preferred Course", field: "preferredCourse", type: "text", required: true },
    { label: "Preferred University (optional)", field: "preferredUniversity", type: "text", required: false },
    { label: "Intake", field: "intake", type: "select", options: ["January", "May", "September", "Other"], required: true },
    { label: "Level of Study", field: "levelOfStudy", type: "select", options: ["Certificate", "Diploma", "Bachelor's", "Master's", "PhD"], required: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map(({ label, field, type, options, required }) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {type === 'select' ? (
            <select
              value={formData.studyPreferences[field]}
              onChange={(e) => handleChange('studyPreferences', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
            >
              <option value="">Select {label}</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={formData.studyPreferences[field]}
              onChange={(e) => handleChange('studyPreferences', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required={required}
              placeholder={`Enter ${label}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Step 4: English Proficiency Component
function EnglishProficiency({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Have you taken IELTS? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.englishProficiency.hasIELTS}
          onChange={(e) => handleChange('englishProficiency', 'hasIELTS', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {formData.englishProficiency.hasIELTS === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            IELTS Score
          </label>
          <input
            type="text"
            value={formData.englishProficiency.ieltsScore}
            onChange={(e) => handleChange('englishProficiency', 'ieltsScore', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter IELTS Score"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Need IELTS Training? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.englishProficiency.needIELTSTraining}
          onChange={(e) => handleChange('englishProficiency', 'needIELTSTraining', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Have you taken TOEFL? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.englishProficiency.hasTOEFL}
          onChange={(e) => handleChange('englishProficiency', 'hasTOEFL', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
}

// Step 5: Passport & Sponsorship Component
function PassportSponsorship({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Do you have a Passport? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.passportSponsorship.hasPassport}
          onChange={(e) => handleChange('passportSponsorship', 'hasPassport', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {formData.passportSponsorship.hasPassport === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Passport Number
          </label>
          <input
            type="text"
            value={formData.passportSponsorship.passportNumber}
            onChange={(e) => handleChange('passportSponsorship', 'passportNumber', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter Passport Number"
          />
        </div>
      )}

      {['sponsorName', 'relationship', 'sponsorPhone', 'estimatedBudget'].map((field) => {
        const labels = {
          sponsorName: "Sponsor Name",
          relationship: "Relationship",
          sponsorPhone: "Sponsor Phone",
          estimatedBudget: "Estimated Budget"
        };
        return (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {labels[field]} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.passportSponsorship[field]}
              onChange={(e) => handleChange('passportSponsorship', field, e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              placeholder={`Enter ${labels[field]}`}
            />
          </div>
        );
      })}
    </div>
  );
}

// Step 6: Additional Information Component
function AdditionalInfo({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Have you ever been denied a visa? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.additionalInfo.hasBeenDeniedVisa}
          onChange={(e) => handleChange('additionalInfo', 'hasBeenDeniedVisa', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Have you studied abroad before? <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.additionalInfo.hasStudiedAbroad}
          onChange={(e) => handleChange('additionalInfo', 'hasStudiedAbroad', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Disabilities/Special Requirements
        </label>
        <textarea
          value={formData.additionalInfo.disabilities}
          onChange={(e) => handleChange('additionalInfo', 'disabilities', e.target.value)}
          rows={2}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          placeholder="Describe any disabilities or special requirements..."
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Anything else we should know?
        </label>
        <textarea
          value={formData.additionalInfo.otherInfo}
          onChange={(e) => handleChange('additionalInfo', 'otherInfo', e.target.value)}
          rows={3}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          placeholder="Share any additional information..."
        />
      </div>
    </div>
  );
}

// Step 7: Upload Documents Component
function UploadDocuments() {
  const documents = [
    "Passport Photo",
    "Passport Copy",
    "National ID",
    "Academic Certificates",
    "Academic Transcripts",
    "CV",
    "IELTS Certificate",
    "Other Documents"
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-sm">
        Upload your documents. You can upload multiple files at once.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div key={doc} className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-orange-400 transition">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {doc}
            </label>
            <input
              type="file"
              multiple={doc === "Other Documents"}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
        ⚠️ Note: File upload functionality requires additional configuration. For now, documents will be sent via email with the form submission.
      </div>
    </div>
  );
}