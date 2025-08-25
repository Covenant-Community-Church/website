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
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                    href="/about/meeting-times"
                    className="btn-primary shadow-lg hover:shadow-xl"
                >
                  Plan Your Visit
                </a>
                <a
                    href="/about/beliefs"
                    className="bg-white/90 hover:bg-white text-brown px-8 py-3 rounded-2xl font-body font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white"
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Truth */}
              <div className="text-center">
                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-brown mb-4">Truth</h3>
                <p className="text-brown leading-relaxed font-body">
                  We believe that God is the ultimate source and author of truth. Truth flows from God&#39;s very nature and essence. Truth should direct and encompass our thinking, speaking, and &#34;doing&#34; as a church. While creation reveals to us there is a God, it is Scripture alone that is the sufficient and infallible bedrock on which to build our knowledge, faith, and practice.
                </p>
              </div>

              {/* Worship */}
              <div className="text-center">
                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-brown mb-4">Worship</h3>
                <p className="text-brown leading-relaxed font-body">
                  We believe that God, in his infinite wisdom and kindness, displays for us in his Word how we are to worship him here and now, as we await worshipping him for all eternity in glory. We gather on the Lord&#39;s Day (Sunday) to read the Word, sing the Word, preach the Word, pray the Word, and see the Word in the ordinances of Baptism and The Lord&#39;s Supper.
                </p>
              </div>

              {/* Community */}
              <div className="text-center">
                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-brown mb-4">Community</h3>
                <p className="text-brown leading-relaxed font-body">
                  We believe that the local church is God&#39;s appointed means for believers to grow in grace and knowledge of our Lord and Savior Jesus Christ. Through faithful participation in the life of the local church, believers are equipped for every good work and prepared for worship in the age to come.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}