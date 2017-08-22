USE skillswap_db;

INSERT INTO Skills
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

  INSERT INTO Users
  	(google_id, name, email, photo)
  VALUES
  	("012344", "Sarah", "sarah@sarah.com", "sarahsphoto.com"),
  	("012345", "Ashish", "ashish@ashish.com", "ashishsphoto.com"),
  	("012346", "Tali", "tali@tali.com", "talisphoto.com");
  
  INSERT INTO Offereds
      (skillId, UserId)
  SELECT 
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Sarah')
    FROM Skills skill
    WHERE skill.skill_name = 'Make you a fake id';

  INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT 
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '16'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Sarah')
    FROM Skills skill
    WHERE skill.skill_name = 'Color code your closet';

    INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT 
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '16'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Sarah')
    FROM Skills skill
    WHERE skill.skill_name = 'Put birds on things';

     INSERT INTO Offereds
      (skillId, UserId)
  SELECT 
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Color code your closet';

  INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT 
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '2'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Make you a fake id';

  INSERT INTO Offereds
      (skillId, UserId)
  SELECT 
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Put birds on things';

  INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT 
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '4'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Make you a fake id';
