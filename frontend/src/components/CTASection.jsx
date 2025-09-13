import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary-300 to-primary-500 text-white text-center">
      <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Academic Experience?</h2>
      <p className="mb-8">Join thousands of teachers and students who have streamlined their assignment workflow with AssignmentHub.</p>
      <div className="flex justify-center gap-3">
        <button className="bg-white text-primary-300 px-7 py-3 rounded-lg font-bold hover:bg-primary-50">Start Free Trial</button>
        <button className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-primary-200 transition">Learn More</button>
      </div>
    </section>
  );
}
