USE skillswap_db;

INSERT INTO skills
  (skill_name)
VALUES
  ("Laundry"),
  ("Vacuuming"),
  ("Dusting"),
  ("Washing Windows"),
  ("Clean Bathroom"),
  ("Wash Dishes"),
  ("Mop Floors"),
  ("Car Wash"),
  ("Unclog Drain"),
  ("Walk Dog"),
  ("Clean Cat Litter"),
  ("Spanish Tutor"),
  ("English Tutor"),
  ("Mandarin Tutor"),
  ("Math Tutor"),
  ("Physics Tutor"),
  ("Computer Science Tutor");

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
