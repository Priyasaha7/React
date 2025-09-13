import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-white text-gray-800 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold text-xl text-primary-500 mb-3">
              AssignmentHub
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Streamlining academic workflows for the modern classroom.
            </p>
            <p className="text-xs text-gray-500 mb-1">
              Built by Priya Saha<br />
              Roll No: 2301010085<br />
              IIT Madras
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-500 mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/features" className="hover:text-primary-500 transition">Features</a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-500 transition">About Project</a>
              </li>
              <li>
                <a href="/demo" className="hover:text-primary-500 transition">Demo</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-500 transition">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-500 mb-3">Support</h4>
            <ul className="text-sm space-y-2">
              <li><a href="/help" className="hover:text-primary-500 transition">Help Center</a></li>
              <li><a href="/docs" className="hover:text-primary-500 transition">Documentation</a></li>
              <li><a href="/faq" className="hover:text-primary-500 transition">FAQ</a></li>
              <li><a href="/support" className="hover:text-primary-500 transition">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-500 mb-3">Connect With Us</h4>

              {/* GitHub Icon */}
              <div className="flex space-x-3 mt-2">
                <a
                  href="https://github.com/priyasaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-400 shadow-sm transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-gray-700 hover:text-primary-500" />
                </a>
                <a
                  href="https://linkedin.com/in/priyasaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-400 shadow-sm transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-700 hover:text-primary-500" />
                </a>
                <a
                  href="https://twitter.com/priyasaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-400 shadow-sm transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-gray-700 hover:text-primary-500" />
                </a>
            </div>
            <p className="text-sm text-gray-600">
              Join our community for updates, tips, and academic support.
            </p>
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} AssignmentHub. Academic project – All rights reserved.
          </div>
          <div className="text-xs text-gray-500 mt-2 md:mt-0">
            Developed as part of college curriculum at IIT Madras
          </div>
        </div>
      </div>
    </footer>
  );
}
