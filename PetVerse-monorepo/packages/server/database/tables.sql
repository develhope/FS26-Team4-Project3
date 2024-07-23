-- Tabella utenti
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_nome VARCHAR(50) NOT NULL UNIQUE,
    user_cognome VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    u_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabella profili animali
CREATE TABLE animal_profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    pet_name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    gender VARCHAR(50),
    age INT,
    bio TEXT,
    a_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Tabella post
CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT NOT NULL,
    p_content TEXT NOT NULL,
    p_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE
);

-- Tabella commenti
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    profile_id INT NOT NULL,
    c_content TEXT NOT NULL,
    c_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (profile_id) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE
);

-- Tabella like
CREATE TABLE likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    profile_id INT NOT NULL,
    l_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (post_id, profile_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (profile_id) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE
);

-- Tabella amicizie
CREATE TABLE friendships (
    friendship_id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id1 INT NOT NULL,
    profile_id2 INT NOT NULL,
    status ENUM('pending', 'accepted', 'declined') DEFAULT 'pending',
    f_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (profile_id1, profile_id2),
    FOREIGN KEY (profile_id1) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE,
    FOREIGN KEY (profile_id2) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE
);

-- Tabella messaggi
CREATE TABLE messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_profile_id INT NOT NULL,
    receiver_profile_id INT NOT NULL,
    content TEXT NOT NULL,
    m_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_profile_id) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_profile_id) REFERENCES animal_profiles(profile_id) ON DELETE CASCADE
);