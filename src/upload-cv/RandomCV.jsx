import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer';

// Register Roboto font for PDF consistency
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
});

// PDF Styles (aligned with Tailwind from HTML)
const styles = StyleSheet.create({
  page: {
    padding: 24, // Match HTML `p-6` ≈ 24px
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#374151', // Tailwind `text-gray-700`
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row', // Side-by-side layout
    justifyContent: 'space-between', // Space between name/position and contact
    alignItems: 'center',
    marginBottom: 16, // Tailwind `mb-4`
  },
  headerLeft: {
    flex: 1, // Takes up available space on the left
  },
  headerRight: {
    flex: 1, // Takes up available space on the right
    textAlign: 'right', // Align contact/social to the right
  },
  header: {
    fontSize: 30, // Tailwind `text-3xl` ≈ 30px
    fontWeight: 'bold',
    color: '#1f2937', // Tailwind `text-gray-800`
  },
  subHeader: {
    fontSize: 18, // Tailwind `text-lg`
    color: '#1f2937', // Tailwind `text-gray-800`
  },
  contact: {
    fontSize: 14, // Tailwind `text-sm` ≈ 14px
    color: '#000', // Tailwind `text-black`
  },
  contactItem: {
    marginBottom: 4, // Tailwind spacing
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db', // Tailwind `border-gray-300`
    marginVertical: 16, // Tailwind `my-4`
  },
  section: {
    marginBottom: 24, // Tailwind `mb-6`
  },
  sectionTitle: {
    fontSize: 20, // Tailwind `text-xl` ≈ 20px
    fontWeight: 'semibold',
    marginBottom: 8, // Tailwind `mb-2`
    color: '#000', // Tailwind `text-black`
    borderBottomWidth: 1,
    borderBottomColor: '#000', // Tailwind `border-b-black`
  },
  text: {
    marginBottom: 4, // Tailwind spacing
    lineHeight: 1.5,
    color: '#374151', // Tailwind `text-gray-700`
  },
  experienceEntry: {
    marginBottom: 12, // Tailwind `mb-3`
  },
});

// CV PDF Document Component
const CVDocument = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.header}>{data.name}</Text>
          <Text style={styles.subHeader}>{data.position}</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>{data.contact.email}</Text>
            <Text style={styles.contactItem}>{data.contact.phone}</Text>
            <Text style={styles.contactItem}>
              {data.contact.city}, {data.contact.country}
            </Text>
            <Text style={styles.contactItem}>{data.socialAccounts.github}</Text>
            <Text style={styles.contactItem}>
              {data.socialAccounts.linkedin}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.hr} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          {data.education.degree} {data.education.institution} (
          {data.education.startingYear} - {data.education.graduationYear})
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceEntry}>
            <Text style={styles.text}>
              {exp.position} at {exp.company} ({exp.duration})
            </Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.text}>{data.skills}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.text}>{data.languages}</Text>
      </View>
    </Page>
  </Document>
);

// HTML Component
const RandomCV = ({ data }) => {
  console.log(data);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-6'>
      <div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mb-6'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-800'>{data.name}</h1>
            <h2 className='text-lg text-gray-800'>{data.position}</h2>
          </div>
          <div className='text-black text-sm text-right'>
            <p>{data.contact.email}</p>
            <p>{data.contact.phone}</p>
            <p>
              {data.contact.city}, {data.contact.country}
            </p>
            <p>{data.socialAccounts.github}</p>
            <p>{data.socialAccounts.linkedin}</p>
          </div>
        </div>
        <hr className='my-4 border-gray-300' />

        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Professional Summary
          </h2>
          <p className='text-gray-700'>{data.summary}</p>
        </section>

        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Education
          </h2>
          <p className='text-gray-700'>
            {data.education.degree} {data.education.institution} (
            {data.education.startingYear} - {data.education.graduationYear})
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Work Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className='mb-3'>
              <p className='text-gray-700'>
                {exp.position} at {exp.company} ({exp.duration})
              </p>
              <p className='text-gray-700'>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Skills
          </h2>
          <p className='text-gray-700'>{data.skills}</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Languages
          </h2>
          <p className='text-gray-700'>{data.languages}</p>
        </section>
      </div>

      <div className='flex gap-4'>
        <PDFDownloadLink
          document={<CVDocument data={data} />}
          fileName={`${data.name}_CV.pdf`}
          className='px-6 py-2 rounded-md text-white  hover:bg-primary border transition-colors'
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download as PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default RandomCV;
