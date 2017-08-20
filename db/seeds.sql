USE skillswap_db;

INSERT INTO skills
  (skill_name)
VALUES
  ("Do your math homework"),
  ("Color code your closet"),
  ("Make stuff out of pallets"),
  ("Put birds on things"),
  ("Pick your drunk ass up at the bar"),
  ("Write your English paper"),
  ("Post-party cleanup"),
  ("Make you a beer bong"),
  ("Let your dog out"),
  ("Bake you some brownies"),
  ("Give you a makeover"),
  ("Tutor you in web development"),
  ("Listen to you talk about your ex"),
  ("Kill that spider"),
  ("Make you a home cooked meal"),
  ("Make you a fake id"),
  ("Social media manager");

  INSERT INTO users
  	(google_id, name, email, photo)
  VALUES
  	("012344", "Sarah", "sarah@sarah.com", "sarahsphoto.com"),
  	("012345", "Ashish", "ashish@ashish.com", "ashishsphoto.com"),
  	("012346", "Tali", "tali@tali.com", "talisphoto.com");
  
  INSERT INTO offereds
      (skillId, UserId)
  SELECT 
    skill.id,
       (SELECT user.id
          FROM users user
          WHERE user.name = 'Sarah')
    FROM skills skill
    WHERE skill.skill_name = 'laundry';

  INSERT INTO wanteds
        (skillId, OfferedId, UserId)
  SELECT 
    skill.id,
      (SELECT offer.id
        FROM offereds offer
        WHERE offer.Skillid = '1'),
      (SELECT user.id
        FROM users user
        WHERE user.name = 'Sarah')
    FROM skills skill
    WHERE skill.skill_name = 'laundry'
