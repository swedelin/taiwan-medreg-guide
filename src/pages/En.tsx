import { Helmet } from 'react-helmet'
import React from 'react'

const faqList = [
  {
    question: 'What documents are required for medical device registration in Taiwan?',
    answer: 'You need a Certificate of Free Sale, product specifications, and clinical data if applicable.'
  },
  {
    question: 'How long does the registration process take?',
    answer: 'Typically 3 to 6 months depending on the device class.'
  }
]

const generateFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqList.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

export default function En() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Medical Device Registration in Taiwan</title>
        <meta
          name="description"
          content="Step-by-step guide for international companies registering medical devices in Taiwan."
        />
        <link rel="alternate" hreflang="en" href="https://regiestar.net/en" />
        <link rel="alternate" hreflang="zh-Hant" href="https://regiestar.net/" />
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>

      <main style={{ padding: '2rem' }}>
        <h1>Medical Device Registration Guide</h1>
        <p>
          This guide provides international companies with a clear overview of how to register medical devices in Taiwan,
          including required documents, timelines, and regulatory tips.
        </p>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            {faqList.map((faq, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
