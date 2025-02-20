export default {
  hello: 'Hello world',
  heroHeading: 'The first international telemedicine platform in Europe',
  heroDescription: 'In every country where we offer telemedicine, we also have medical practices where our doctors can examine you in person!',
  register: 'Register',
  
  // Languages section
  languagesTitle: 'Languages we speak',
  languageBulgarian: 'Bulgarian',
  languageGerman: 'German',
  languageEnglish: 'English',
  languageTurkish: 'Turkish',
  languageSerbian: 'Serbian',
  
  // Principles section
  principlesWhatWeDo: 'What we do ?',
  principlesTitle: 'First-class telemedicine care',
  principlesDescription: 'Licensed specialists with certifications and practices in the countries where we operate, capable of addressing all your healthcare needs via video consultation.',
  
  // Principle items
  principlePatientRecord: 'Patient record',
  principlePatientRecordDesc: 'In your profile, you can view and download all your doctor-documented conditions, prescriptions, and certificates.',
  
  principleSickNotes: 'Sick notes',
  principleSickNotesDesc: 'Electronic submission of sick notes to the necessary health organizations.',
  
  principlePrescriptions: 'Prescriptions',
  principlePrescriptionsDesc: 'The prescriptions are electronic and can be directly redeemed at any pharmacy. You only need to identify yourself at the pharmacy.',
  
  principleMultilingualDoctors: 'Multilingual doctors',
  principleMultilingualDoctorsDesc: 'Our doctors speak English, German, Turkish, Bulgarian, and Serbo-Croatian.',

  // Services section
  smartSolutionsTitle: 'Smart Healthcare Solutions',
  smartSolutionsDesc: 'Experience premium German medical care from the comfort of your home, with transparent pricing and exceptional service quality',
  viewPricing: 'View Pricing',
  
  // Cost efficiency list
  costEfficiency1: 'Offered at no cost to all regular patients of our medical practices',
  costEfficiency2: 'A fixed flat rate, no matter the treatment',
  costEfficiency3: 'High-quality, evidence-based medical care from German doctors in every country where our platform operates',

  // Premium care section
  premiumCareTitle: 'Premium German Medical Care Across Europe',
  premiumCareDesc: 'Save yourself from overpriced treatments abroad and, most importantly, from wasting your valuable time',
  
  // Premium care list
  premiumCare1: '**High-quality, evidence-based medicine** provided by experienced German doctors',
  premiumCare2: '**Convenient video consultations** and treatments across multiple European countries',
  premiumCare3: '**Transparent pricing** with a fixed flat rate for all treatments',
  premiumCare4: '**Exclusive benefits** for regular patients, including free follow-up services',
  premiumCare5: 'Save **time and money** by avoiding unnecessary travel and overpriced treatments abroad',

  // Services Second section
  servicesTitle: 'Our Services',
  servicesHeading: 'In every country where we operate, we also have physical clinics where you can receive examinations and treatment',
  servicesDesc: 'We are working on expanding the countries where we operate, with Turkey and Greece coming soon',
  
  // Clinic locations
  bulgariaClinics: 'Bulgaria',
  bulgariaClinicsDesc: 'Physical clinic- Clinic Dr. Kerim in Plovdiv,Antonovo and Omurtag',
  germanyClinics: 'Germany',
  germanyClinicsDesc: 'Physical clinic - Praxis Dr. Kerim in Offenbach am Main',

  // Pricing section
  pricingTitle: 'Our Pricing',
  pricingPerMonth: 'Per Month',
  pricingBuyNow: 'Buy Now',
  pricingNoCard: '*No credit card required',
  
  // Pricing plans
  planFreeTitle: 'Free for our Patients',
  planFreeDesc: 'For our regular patients with insurance',
  planDocsTitle: 'Issuing documents and prescriptions',
  planDocsDesc: 'For document and prescription needs',
  planConsultTitle: 'Consultation with a Physician',
  planConsultDesc: 'Full consultation and services',
  
  // Plan features
  planFeatureInsurance: 'Proof of insurance is required for each period',
  planFeatureNoInsurance: 'No Proof of insurance is required',
  planFeatureVideo: 'Videoconsultation',
  planFeaturePrescriptions: 'e-Prescriptions',
  planFeatureSickNotes: 'e-Sick notes',

  // Contact section
  contactTitle: 'Contact us',
  contactName: 'Your Name',
  contactEmail: 'Your Email',
  contactSubject: 'Subject',
  contactMessage: 'Comments',
  contactSend: 'Send Message',
  contactNoCard: '*No credit card required',
  contactNamePlaceholder: 'Name :',
  contactEmailPlaceholder: 'Email :',
  contactSubjectPlaceholder: 'Subject :',
  contactMessagePlaceholder: 'Message :',

  // Navbar items
  navHome: 'Home',
  navAbout: 'About Us',
  navCountries: 'Countries of Operation',
  navLogin: 'Login',

  // Login page
  loginTitle: 'Sign In',
  loginEmail: 'Your Email',
  loginPassword: 'Password',
  loginRemember: 'Remember me',
  loginForgot: 'Forgot password ?',
  loginButton: 'Sign in',
  loginNoAccount: 'Don\'t have an account ?',
  loginSignUp: 'Sign Up',

  // Registration Validation
  registration: {
    title: 'Sign Up',
    fields: {
      firstName: {
        label: 'First Name',
        placeholder: 'Enter your first name',
      },
      lastName: {
        label: 'Last Name',
        placeholder: 'Enter your last name',
      },
      birthday: {
        label: 'Birthday',
        placeholder: 'Select your birthday',
      },
      address: {
        label: 'Address',
        placeholder: 'Enter street name',
      },
      addressNumber: {
        label: 'Number',
        placeholder: 'Enter address number',
      },
      postCode: {
        label: 'Post Code',
        placeholder: 'Enter post code',
      },
      city: {
        label: 'City',
        placeholder: 'Enter city',
      },
      country: {
        label: 'Country',
        placeholder: 'Select country',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
      },
      password: {
        label: 'Password',
        placeholder: 'Enter password',
      },
      insuranceType: {
        label: 'Insurance Type',
        options: {
          state: 'State Insurance',
          private: 'Private Insurance',
          self: 'Self Payment / Tourist',
        },
      },
      insuranceNumber: {
        label: 'Insurance Number',
        placeholder: 'Enter insurance number',
      },
      insuranceCompany: {
        label: 'Insurance Company',
        placeholder: 'Enter insurance company',
      },
      nationalId: {
        label: 'National Identity Number (ЕГН)',
        placeholder: 'Enter your EGN',
        hint: 'Please enter your 10-digit EGN number',
      },
    },
    validation: {
      required: '{field} is required',
      email: 'Please enter a valid email address',
      password: {
        minLength: 'Password must be at least 8 characters long',
        lowercase: 'Password must contain at least one lowercase letter',
        uppercase: 'Password must contain at least one uppercase letter',
        number: 'Password must contain at least one number',
        specialChar: 'Password must contain at least one special character',
      },
      postCode: 'Please enter a valid postal code',
      nationalId: 'Please enter a valid national ID number',
      insuranceNumber: 'Please enter a valid insurance number',
      date: 'Please enter a valid date',
      termsRequired: 'Please accept the terms and conditions',
    },
    submit: {
      buttonText: 'Register',
      loginPrompt: 'Already have an account?',
      loginText: 'Sign in',
    },
    terms: {
      accept: 'I Accept',
      link: 'Terms And Conditions'
    },
    messages: {
      success: 'Registration Successful',
      successMessage: 'Please check your email to validate your account. You will be redirected to the login page.',
      error: 'Registration Failed',
      errorMessage: 'An error occurred during registration. Please try again.',
      loading: 'Registering...',
      tryAgain: 'Try Again',
    },
  },
}