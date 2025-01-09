import React from 'react';
import './App.css';

/* React Icons - Font Awesome Mark Icons */
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="main-container">
      <div className="App">
        {/* Üst (Header) Bölümü: Fotoğraf + İsim + Tanıtım */}
        <header className="header">
          <div className="profile-image">
            <img src="/taner-bas.jpg" alt="Taner Baş" />
          </div>
          <div className="header-info">
            <h1>Taner Baş</h1>
            <h2>Frontend Developer</h2>
            <p className="intro-text">
              Merhaba, ben Taner. Web uygulamaları ve dijital çözümler geliştirme 
              konusunda geniş bir deneyime sahibim. Amacım; kullanıcı dostu, etkili 
              ve ölçeklenebilir yazılımlar oluşturarak müşterilerimin hedeflerine 
              ulaşmasına yardımcı olmaktır.
            </p>
          </div>
        </header>

        {/* Separator */}
        <hr className="separator" />

        {/* Kişisel Bilgiler */}
        <section className="personal-info">
          <h2>Kişisel Bilgiler</h2>
          <p><strong>Email:</strong> taner@example.com</p>
          <p><strong>Telefon:</strong> 0537 733 92 42</p>
          <p><strong>Adres:</strong> Çamlık Mahallesi, Orta Sokak No:10 Bodrum, Muğla</p>
          <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
          <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
          <p><strong>Mezuniyet Yılı:</strong> 2025</p>
        </section>

        <hr className="separator" />

        {/* İş Deneyimi */}
        <section className="experience">
          <h2>İş Deneyimi</h2>
          
          <div className="job-item">
            <p><strong>Şirket Adı:</strong> Koç Sistem</p>
            <p><strong>Pozisyon:</strong> Saha Uzmanı</p>
          </div>
          <hr className="separator-job" />

          <div className="job-item">
            <p><strong>Şirket Adı:</strong> Allkaria.com</p>
            <p><strong>Pozisyon:</strong> Frontend Developer</p>
          </div>
          <hr className="separator-job" />

          <div className="job-item">
            <p><strong>Şirket Adı:</strong> Publika Dijital</p>
            <p><strong>Pozisyon:</strong> Frontend Developer</p>
          </div>
        </section>

        <hr className="separator" />

        {/* Beceriler */}
        <section className="skills">
          <h2>Becerilerim</h2>
          <div className="skills-list">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">WordPress</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">PHP</div>
            <div className="skill-item">CRM</div>
            <div className="skill-item">Google Analytics</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">Photoshop</div>
            <div className="skill-item">Illustrator</div>
            <div className="skill-item">SEO Optimizasyonu</div>
          </div>
        </section>

        <hr className="separator" />

        {/* Hobiler */}
        <section className="hobbies">
          <h2>Hobiler ve İlgi Alanları</h2>
          <div className="hobbies-list">
            <div className="hobby-item">Müzik</div>
            <div className="hobby-item">Seyahat</div>
            <div className="hobby-item">Fotoğrafçılık</div>
            <div className="hobby-item">Oyun Oynamak</div>
          </div>
        </section>

        <hr className="separator" />

        {/* Referanslar */}
        <section className="references">
          <h2>Referanslar</h2>
          <div className="reference-cards">
            <div className="reference-card">
              <h3>Ümmetoğlu Yol Yardım</h3>
              <p>Kurumsal web tasarım hizmeti, reklam yönetimi hizmeti.</p>
            </div>
            <div className="reference-card">
              <h3>Nilüfer Lokantası</h3>
              <p>Restoran web sitesi ve QR menü tasarımı.</p>
            </div>
            <div className="reference-card">
              <h3>Bitci Games</h3>
              <p>Kurumsal web tasarım hizmeti.</p>
            </div>
            <div className="reference-card">
              <h3>Çamlık Köyü</h3>
              <p>Blog</p>
            </div>
            <div className="reference-card">
              <h3>Karyalı Yatching</h3>
              <p>Kurumsal web sayfası hizmeti.</p>
            </div>
            <div className="reference-card">
              <h3>Kuzey Yachting</h3>
              <p>Kurumsal web sayfası hizmeti.</p>
            </div>
            <div className="reference-card">
              <h3>Altın Sandalet</h3>
              <p>E-ticaret platformu.</p>
            </div>
            <div className="reference-card">
              <h3>Co Bodrum</h3>
              <p>Web sayfası içerik yönetimi.</p>
            </div>
            <div className="reference-card">
              <h3>Luvi Runners</h3>
              <p>Kurumsal kimlik çalışması.</p>
            </div>
          </div>
        </section>

        <hr className="separator" />

        {/* Sosyal Medya */}
        <section className="social-media">
          <h2>Sosyal Medya</h2>
          <div className="social-media-icons">
            {/* 
              Örnek: React Icons ile ekliyoruz.
              Sırasıyla LinkedIn, Twitter, Instagram
            */}
            <a href="https://www.linkedin.com/in/taner-ba%C5%9F-933bb1179/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/tanerbass" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/tanerrbas" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <footer className="footer">
          <p >Beni takip etmeyi unutmayın</p>
        </footer>

        </section>

        <hr className="separator" />

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
