import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img
                src="/images/logo.jpg"
                alt="Vrindaban Uniforms Logo"
                className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full object-cover border-2 border-white shadow-lg mb-4"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Vrindaban Uniforms
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-300 italic mb-4">
              "We stitch your trust."
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-6">
              Premium Uniforms for Every{' '}
              <span className="text-primary-300">Industry</span>
            </p>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg mx-auto md:mx-0">
              Crafting excellence since day one. We manufacture high-quality uniforms for
              hospitality, healthcare, corporate, and industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-white text-primary-900 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-center"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/chef-coat/chef-coat-1.jpeg"
                  alt="Chef Coat"
                  className="w-full h-64 object-cover object-[50%_15%]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/corporate-uniform/corporate-uniform-1.jpeg"
                  alt="Corporate Uniform"
                  className="w-full h-48 object-cover object-[50%_7%]"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/hospital-staff/hospital-staff-1.jpeg"
                  alt="Hospital Staff"
                  className="w-full h-48 object-cover object-[50%_10%]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/fb-dept/fb-dept-1.jpeg"
                  alt="F&B Department"
                  className="w-full h-64 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-primary-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">9+</div>
            <div className="text-primary-200">Product Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-primary-200">Uniforms Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-primary-200">Quality Assured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
