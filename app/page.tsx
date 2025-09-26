import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/hero-church.jpg')"
              }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-brown/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
                Covenant Community Church
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-body drop-shadow-md">
                Our purpose is to glorify God<br />
                as we proclaim Jesus Christ as Lord<br />
                and prepare His people to worship Him forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/meeting-times"
                    className="btn-primary shadow-lg hover:shadow-xl"
                >
                  Plan Your Visit
                </a>
                <a
                    href="/beliefs"
                    className="btn-secondary shadow-lg hover:shadow-xl"
                >
                  Our Beliefs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Our Values" />

            <div className="grid md:grid-cols-3 gap-12">
              {/* Truth */}
              <FeatureCard
                icon={<svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>}
                title="Truth"
              >
                <p>
                  We believe that God is the ultimate source and author of truth. Truth flows from God’s very nature and essence. Truth should direct and encompass our thinking, speaking, and “doing” as a church. While creation reveals to us there is a God, it is Scripture alone that is the sufficient and infallible bedrock on which to build our knowledge, faith, and practice.
                </p>
              </FeatureCard>

              {/* Worship */}
              <FeatureCard
                icon={<svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>}
                title="Worship"
              >
                <p>
                  We believe that God, in his infinite wisdom and kindness, displays for us in his Word how we are to worship him here and now, as we await worshipping him for all eternity in glory. While there is freedom regarding the different “circumstances” of worship (ie. whether or not to meet in a building or use a microphone), we do not exercise this same freedom regarding the “elements” of worship. We gather on the Lord’s Day (Sunday) to read the Word, sing the Word, preach the Word, pray the Word, and see the Word in the ordinances of Baptism and The Lord’s Supper. Often termed “ordinary means of grace,” these elements are channels by which God dispenses grace to his people.
                </p>
              </FeatureCard>

              {/* Community */}
              <FeatureCard
                icon={<svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>}
                title="Community"
              >
                <p>
                  We believe that genuine, authentic community that is driven by the gospel of Jesus Christ is the New Testament model for the Church. Living life in a close-knit family of faith is extremely difficult at times; however, this model is for the betterment of both the individuals in the Church and the on-looking world around us. We strive to value the genuine fellowship of believers, and to commit to investing and participating in the surrounding community, with the hope of drawing others into the fold of God.
                </p>
              </FeatureCard>
            </div>
          </div>
        </section>
      </div>
  );
}