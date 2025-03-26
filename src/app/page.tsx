import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  AudioLines,
  Edit3,
  FileAudio,
  Shield,
  Languages,
} from "lucide-react";
import { Activity as Waveform } from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Tamil Audio Transcription App offers a comprehensive suite of
              tools to convert, edit, and manage your Tamil audio content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileAudio className="w-6 h-6" />,
                title: "Easy Audio Upload",
                description:
                  "Intuitive drag & drop interface for .mp3, .wav, and .m4a files",
              },
              {
                icon: <AudioLines className="w-6 h-6" />,
                title: "AWS Transcription",
                description:
                  "Accurate Tamil speech recognition powered by AWS Transcribe",
              },
              {
                icon: <Languages className="w-6 h-6" />,
                title: "Tamil Transliteration",
                description:
                  "Automatic transliteration using OpenAI GPT-3.5 Turbo",
              },
              {
                icon: <Waveform className="w-6 h-6" />,
                title: "Waveform Visualization",
                description:
                  "Interactive audio waveform for precise timestamp editing",
              },
              {
                icon: <Edit3 className="w-6 h-6" />,
                title: "Subtitle Editor",
                description:
                  "Powerful interface for editing both Tamil text and transliteration",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure Authentication",
                description:
                  "Protected routes with email and Google OAuth login options",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple three-step process to transform your Tamil audio into
              editable text
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-gray-600">
                Upload your Tamil audio files through our easy-to-use interface
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Process</h3>
              <p className="text-gray-600">
                Our system automatically transcribes and transliterates your
                content
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Edit & Export</h3>
              <p className="text-gray-600">
                Fine-tune your transcription with our interactive editor and
                export
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transcribe Your Tamil Audio?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up now and start converting your Tamil audio files into
            editable text with our powerful transcription tools.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
