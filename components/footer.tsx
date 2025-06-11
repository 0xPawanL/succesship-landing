"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Succesship Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">
                <span className="text-blue-400">Success</span>
                <span className="text-orange-400">ship</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Digitizing partner operations for enterprise success across India.
            </p>
            <div className="text-sm text-gray-400">
              <p>Mumbai, India</p>
              <p>hello@succesship.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="text-blue-400">Success</span>
                  <span className="text-orange-400">Go</span> - Onboarding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="text-blue-400">Success</span>
                  <span className="text-orange-400">Score</span> - Risk Evaluation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="text-blue-400">Success</span>
                  <span className="text-orange-400">Ez</span> - Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="text-blue-400">Success</span>
                  <span className="text-orange-400">Collect</span> - Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="text-blue-400">Success</span>
                  <span className="text-orange-400">Wiz</span> - AR/AP Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FMCG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Retail
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Electronics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 <span className="text-blue-400">Success</span>
            <span className="text-orange-400">ship</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
