import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Project Manager, SA Construction",
    content: "AVD Traffic Solutions handled our roadwork project flawlessly. Their team was professional, punctual, and safety-focused throughout the entire duration.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Event Coordinator, Adelaide Events Co.",
    content: "We've used AVD for multiple large-scale events. Their traffic management expertise ensures smooth flow for thousands of attendees every time.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Site Supervisor, Urban Development Group",
    content: "Reliable, efficient, and always available for emergency callouts. AVD Traffic has become our go-to partner for all traffic control needs.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by construction companies, event organizers, and councils across Adelaide and South Australia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 right-6 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-neon">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <User className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center"
                >
                  <User className="w-4 h-4 text-accent" />
                </div>
              ))}
            </div>
            <span className="text-sm">100+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm">5.0 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
