import React from 'react';
import {
  Document,
  Page,
  Text,
  Svg,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
  Path,
} from '@react-pdf/renderer';

// Register Roboto font for PDF consistency
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
});

// Random CV Data

// PDF Styles (mirroring Tailwind as closely as possible)
const styles = StyleSheet.create({
  page: {
    padding: 32, // Tailwind `p-8` ≈ 32px
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#333', // Tailwind `text-gray-700`
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30, // Tailwind `text-3xl` ≈ 30px
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8, // Tailwind `mb-2`
    color: '#1f2937', // Tailwind `text-gray-800`
  },
  contact: {
    fontSize: 10, // Tailwind `text-sm` ≈ 14px, adjusted for PDF
    textAlign: 'center',
    marginBottom: 16, // Tailwind `mb-4`
    color: '#4b5563', // Tailwind `text-gray-600`
  },
  contactItem: {
    marginBottom: 4, // Tailwind spacing
  },
  section: {
    marginBottom: 24, // Tailwind `mb-6`
  },
  sectionTitle: {
    fontSize: 20, // Tailwind `text-xl` ≈ 20px
    fontWeight: 'bold',
    marginBottom: 8, // Tailwind `mb-2`
    color: '#2563eb', // Tailwind `text-black`
    borderBottom: '1pt solid #2563eb', // Tailwind `border-b border-b-black`
  },
  text: {
    marginBottom: 4, // Tailwind spacing
    lineHeight: 1.5,
    color: '#374151', // Tailwind `text-gray-700`
  },
  experienceEntry: {
    marginBottom: 12, // Tailwind `mb-3`
  },
  listItem: {
    marginLeft: 20, // Tailwind `ml-5`
    marginBottom: 4, // Tailwind spacing
  },

  icon: { marginRight: 4 },
});

// CV PDF Document Component
const CVDocument = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Text style={styles.header}>{data.fullName}</Text>
      <View style={styles.contact}>
        <Svg width={10} height={10} style={styles.icon} viewBox='0 0 24 24'>
          <Path
            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            stroke='#4b5563'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </Svg>
        <Text style={styles.contactItem}>{data.email}</Text>
        <Text style={styles.contactItem}> {data.phone}</Text>
        <Text style={styles.contactItem}> {data.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, index) => (
          <Text key={index} style={styles.text}>
            {edu.degree} - {edu.institution} ({edu.year})
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceEntry}>
            <Text style={styles.text}>
              {exp.jobTitle} at {exp.company} ({exp.years})
            </Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {data.skills.map((skill, index) => (
          <Text key={index} style={styles.listItem}>
            • {skill}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {data.certifications.map((cert, index) => (
          <Text key={index} style={styles.listItem}>
            • {cert}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

const RandomCV = ({ data }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-6'>
      <div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mb-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2 text-center'>
          {data.name}
        </h1>
        <div className='text-gray-600 mb-4 text-sm text-center'>
          <p className='text-black'>{data.email}</p>
          <p className='text-black'>{data.phone}</p>
        </div>
        <hr className='my-4 border-gray-300' />

        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Professional Summary
          </h2>
          <p className='text-gray-700'>{data.summary}</p>
        </section>

        <section className='mb-6 text-black'>
          <h2
            className='text-xl font-semibold
           text-black mb-2 border-b border-b-black'
          >
            Education
          </h2>

          <div>
            <span>{data.education.degree}</span>
            <span> {data.education.institution}</span>
            <span>{data.education.startingYear}</span>
            <span>{data.education.graduationYear}</span>
          </div>
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
          <h2 className='text-xl text-black font-semibold  mb-2 border-b border-b-black'>
            Skills
          </h2>

          <p className='text-black'>{data.skills}</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-black mb-2 border-b border-b-black'>
            Languages
          </h2>

          <p className='text-black'>{data.languages}</p>
        </section>
      </div>

      <div className='flex gap-4'>
        <PDFDownloadLink
          document={<CVDocument data={data} />}
          fileName={`${data.name}_CV.pdf`}
          className='px-6 py-2 rounded-md text-white hover:bg-primary border transition-colors'
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download as PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default RandomCV;
