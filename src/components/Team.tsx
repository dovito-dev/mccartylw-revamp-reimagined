
import { User, Award, BookOpen, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Kevin McCarty",
      title: "Principal Appraiser & Owner",
      credentials: "MAI, ASA, Licensed in Colorado",
      description: "Over 25 years of experience in complex property valuations, specializing in agricultural properties, conservation easements, and water rights.",
      email: "kevin@mccartylw.com"
    },
    {
      name: "Shiloh Wittler",
      title: "Senior Appraiser",
      credentials: "Licensed Appraiser, Colorado",
      description: "Expertise in residential and commercial appraisals with extensive knowledge of Front Range markets and development trends.",
      email: "shiloh@mccartylw.com"
    },
    {
      name: "Betsy Wagner",
      title: "Associate Appraiser",
      credentials: "Licensed Appraiser, Colorado",
      description: "Specializes in residential properties and market analysis with strong attention to detail and client communication.",
      email: "betsy@mccartylw.com"
    },
    {
      name: "Delaney Dreckman",
      title: "Appraiser Trainee",
      credentials: "Certified Trainee, Colorado",
      description: "Developing expertise in property research, data analysis, and appraisal report preparation under senior supervision.",
      email: "delaney@mccartylw.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Team</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Meet Our Expert Appraisers
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Our team combines decades of experience with ongoing education and professional development 
            to deliver the highest quality appraisal services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="text-secondary" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold">
                      {member.title}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Award size={16} />
                      <span>{member.credentials}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted leading-relaxed">
                  {member.description}
                </p>
                
                <div className="pt-4 border-t border-slate-200">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Mail size={16} />
                    <span className="font-medium">{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Support Staff</h3>
            <p className="text-muted leading-relaxed">
              Our dedicated support team includes administrative staff, research specialists, and 
              client service representatives who ensure every appraisal project runs smoothly from 
              start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
