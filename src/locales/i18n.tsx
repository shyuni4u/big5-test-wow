import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      home: {
        big5testTitle: 'What is Big Five Test?',
        big5testDesc:
          'The Big Five personality traits is a suggested taxonomy, or grouping, for personality traits, developed from the 1980s onwards in psychological trait theory.',
        big5testLink: 'https://en.wikipedia.org/wiki/Big_Five_personality_traits',
        big5testLinkTitle: 'Big five personality test',
        statClass: 'Select class',
        big5Test: 'Personality test',
        btnStart: 'Start',
        btnResult: 'Result',
        comment: 'Machine learning training date: 2021-12-14',
        checkNewbie: 'Do you have a WOW character?',
        yes: 'No',
        no: 'Yes',
        detail: 'Detail'
      },
      test: {
        title: 'Personality Test',

        q01: `I talk to someone I don't know first.`,
        q02: 'I make sure others are comfortable and happy.',
        q03: 'I create drawings, texts, and music.',
        q04: 'I prepare everything in advance.',
        q05: 'I feel depressed or depressed.',
        q06: 'I plan dinners, parties, and social gatherings.',
        q07: `I feeling frustrated with other people's actions.`,
        q08: 'I think about philosophical or spiritual matters.',
        q09: 'I tend not to organize my work or things.',
        q10: 'I feel stressed or worried.',
        q11: 'I use difficult words.',
        q12: `I empathize with other people's feelings.`,

        a01: 'Strongly Disagree',
        a02: 'Disagree',
        a03: 'Neutral',
        a04: 'Agree',
        a05: 'Strongly Agree'
      },
      gameclass: {
        selectClassTitle: 'Choose class',
        selectClassComment: 'Choose your classes. (Max 3)',
        selectClassEmpty: 'Choose your classes (1 ~ 3)',
        maxSelectText: 'Max select: {{max}}',
        goResult: 'Result',
        close: 'Close',

        tanker: 'Tanker',
        dealer: 'Dealer',
        healer: 'Healer',

        'Death-Knight': 'Death Knight',
        blood: 'Blood',
        'frost-d': 'Frost',
        unholy: 'Unholy',
        bloodDesc:
          'A dark guardian who manipulates and corrupts life energy to sustain herself in the face of an enemy onslaught. Preferred Weapon: Two-Handed Axe, Mace, Sword',
        'frost-dDesc':
          'An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes. Preferred Weapons: Dual Axes, Maces, Swords',
        unholyDesc:
          'A master of death and decay, spreading infection and controlling undead minions to do her bidding. Preferred Weapon: Two-Handed Axe, Mace, Sword',

        'Demon-Hunter': 'Demon Hunter',
        havoc: 'Havoc',
        vengeance: 'Vengeance',
        havocDesc: `A brooding master of warglaives and the destructive power of Fel magic. Preferred Weapons: Warglaives, Swords, Axes, Fist Weapons`,
        vengeanceDesc:
          'Embraces the demon within to incinerate enemies and protect their allies. Preferred Weapons: Warglaives, Swords, Axes, Fist Weapons',

        Druid: 'Druid',
        guardian: 'Guardian',
        feral: 'Feral',
        balance: 'Balance',
        restoration: 'Restoration',
        guardianDesc:
          'Takes on the form of a mighty bear to absorb damage and protect allies. Preferred Weapon: Staff, Polearm',
        feralDesc:
          'Takes on the form of a great cat to deal damage with bleeds and bites. Preferred Weapon: Staff, Polearm',
        balanceDesc:
          'Can shapeshift into a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies. Preferred Weapon: Staff, Dagger, Mace',
        restorationDesc:
          'Channels powerful Nature magic to regenerate and revitalize allies. Preferred Weapon: Staff, Dagger, Mace',

        Hunter: 'Hunter',
        'beast-mastery': 'Beast Mastery',
        marksmanship: 'Marksmanship',
        survival: 'Survival',
        'beast-masteryDesc':
          'A master of the wild who can tame a wide variety of beasts to assist him in combat. Preferred Weapon: Bow, Crossbow, Gun',
        marksmanshipDesc:
          'A master sharpshooter who excels in bringing down enemies from afar. Preferred Weapon: Bow, Crossbow, Gun',
        survivalDesc:
          'An adaptive ranger who favors using explosives, animal venom, and coordinated attacks with their bonded beast. Preferred Weapon: Polearm, Staff',

        Mage: 'Mage',
        arcane: 'Arcane',
        fire: 'Fire',
        'frost-m': 'Frost',
        arcaneDesc:
          'Manipulates raw Arcane magic, destroying enemies with overwhelming power. Preferred Weapon: Staff, Wand, Dagger, Sword',
        fireDesc:
          'Focuses the pure essence of Fire magic, assaulting enemies with combustive flames. Preferred Weapon: Staff, Wand, Dagger, Sword',
        'frost-mDesc':
          'Freezes enemies in their tracks and shatters them with Frost magic. Preferred Weapon: Staff, Wand, Dagger, Sword',

        Monk: 'Monk',
        brewmaster: 'Brewmaster',
        mistweaver: 'Mistweaver',
        windwalker: 'Windwalker',
        brewmasterDesc:
          'A sturdy brawler who uses unpredictable movement and mystical brews to avoid damage and protect allies. Preferred Weapon: Staff, Polearm',
        mistweaverDesc:
          'A healer who masters the mysterious art of manipulating life energies aided by the wisdom of the Jade Serpent. Preferred Weapon: Staff, Mace, Sword',
        windwalkerDesc:
          'A martial artist without peer who pummels foes with hands and fists. Preferred Weapons: Fist Weapons, Axes, Maces, Swords',

        Paladin: 'Paladin',
        'protection-p': 'Protection',
        'holy-p': 'Holy',
        retribution: 'Retribution',
        'protection-pDesc':
          'Uses Holy magic to shield himself and defend allies from attackers. Preferred Weapon: Sword, Mace, Axe, and Shield',
        'holy-pDesc':
          'Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield',
        retributionDesc:
          'A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe',

        Priest: 'Priest',
        discipline: 'Discipline',
        'holy-pr': 'Holy',
        shadow: 'Shadow',
        disciplineDesc:
          'Uses magic to shield allies from taking damage as well as heal their wounds. Preferred Weapon: Staff, Wand, Dagger, Mace',
        'holy-prDesc':
          'A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave. Preferred Weapon: Staff, Wand, Dagger, Mace',
        shadowDesc:
          'Uses sinister Shadow magic and terrifying Void magic to eradicate enemies. Preferred Weapon: Staff, Wand, Dagger, Mace',

        Rogue: 'Rogue',
        outlaw: 'Outlaw',
        subtlety: 'Subtlety',
        assassination: 'Assassination',
        outlawDesc:
          'A ruthless fugitive who uses agility and guile to stand toe-to-toe with enemies. Preferred Weapons: Axes, Maces, Swords, Fist Weapons',
        subtletyDesc:
          'A dark stalker who leaps from the shadows to ambush her unsuspecting prey. Preferred Weapons: Daggers',
        assassinationDesc:
          'A deadly master of poisons who dispatches victims with vicious dagger strikes. Preferred Weapons: Daggers',

        Shaman: 'Shaman',
        elemental: 'Elemental',
        enhancement: 'Enhancement',
        'restoration-s': 'Restoration',
        elementalDesc:
          'A spellcaster who harnesses the destructive forces of nature and the elements. Preferred Weapon: Mace, Dagger, and Shield',
        enhancementDesc:
          'A totemic warrior who strikes foes with weapons imbued with elemental power. Preferred Weapons: Dual Axes, Maces, Fist Weapons',
        'restoration-sDesc': `A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds. Preferred Weapon: Mace, Dagger, and Shield`,

        Warlock: 'Warlock',
        affliction: 'Affliction',
        demonology: 'Demonology',
        destruction: 'Destruction',
        afflictionDesc:
          'A master of shadow magic who specializes in drains and damage-over-time spells. Preferred Weapon: Staff, Wand, Dagger, Sword',
        demonologyDesc:
          'A commander of demons who twists the souls of his army into devastating power. Preferred Weapon: Staff, Wand, Dagger, Sword',
        destructionDesc:
          'A master of chaos who calls down fire to burn and demolish enemies. Preferred Weapon: Staff, Wand, Dagger, Sword',

        Warrior: 'Warrior',
        'protection-w': 'Protection',
        arms: 'Arms',
        fury: 'Fury',
        'protection-wDesc':
          'A stalwart protector who uses a shield to safeguard herself and her allies. Preferred Weapon: Axe, Mace, Sword, and Shield',
        armsDesc:
          'A battle-hardened master of weapons, using mobility and overpowering attacks to strike her opponents down. Preferred Weapon: Two-Handed Axe, Mace, Sword',
        furyDesc:
          'A furious berserker unleashing a flurry of attacks to carve her opponents to pieces. Preferred Weapons: Dual Axes, Maces, Swords',

        Evoker: 'Evoker',
        devastation: 'Devastation',
        preservation: 'Preservation',
        devastationDesc:
          'Releases innate power as chaotic Red flames or focused Blue magic to bathe the battlefield in destruction. Preferred Weapon: Staff, Sword, Dagger, Mace',
        preservationDesc:
          'Calls upon the Emerald Dream to rejuvenate life, and the Bronze sands of time to prevent harm. Preferred Weapon: Staff, Sword, Dagger, Mace'
      },
      result: {
        title: 'Personality test',
        more: 'More',
        loading: 'Loading',
        stat: 'Statistics',
        retry: 'Retry',
        golostark: 'Lostark result',
        you: 'Your Personality',
        likeyoucount: 'Number of class by personality',
        likeyouratio: 'Number of personality by class',
        machinelearning: 'Machine Learning',
        training: 'Training',
        totalcount: 'Total by class',
        testcount: 'Number of data with the same result',
        thankyou: 'Thank you for taking the personality test.',
        warning:
          'It is an app created by individuals to help users choose a class for beginners and for fun. This is not an official WOW survey.',
        sorry: 'Sorry. There are no results of the same personality.',

        agreeableness: 'Agreeableness',
        agreeablenessDesc:
          'Agreeableness describes a person’s tendency to put others’ needs ahead of their own, and to cooperate rather than compete with others.',
        conscientiousness: 'Conscientiousness',
        conscientiousnessDesc:
          'Conscientiousness describes a person’s ability to exercise self-discipline and control in order to pursue their goals.',
        extraversion: 'Extraversion',
        extraversionDesc:
          'Extraversion describes a person’s inclination to seek stimulation from the outside world, especially in the form of attention from other people.',
        opennessToExperience: 'OpennessToExperience',
        opennessToExperienceDesc: 'Openness describes a person’s tendency to think in abstract, complex ways.',
        neuroticism: 'Neuroticism',
        neuroticismDesc:
          'Neuroticism describes a person’s tendency to experience negative emotions, including fear, sadness, anxiety, guilt, and shame.'
      }
    }
  },
  kr: {
    translation: {
      home: {
        big5testTitle: 'Big 5 테스트란?',
        big5testDesc: `인간의 성격을 5가지 요인들로 설명하는 성격심리 모형. 학계에서 논의된 5요인 모형을 기반으로 한다. 성격심리학자들에게 신뢰를 받고 있는 검증된 이론이다.`,
        big5testLink: 'https://namu.wiki/w/Big5',
        big5testLinkTitle: '[나무위키] Big 5 테스트',
        statClass: '직업 선택',
        big5Test: '성향 테스트',
        btnStart: '시작하기',
        btnResult: '결과보기',
        comment: '머신러닝 학습일: 2021-12-14',
        checkNewbie: '월드오브워크래프트 초보자입니까?',
        yes: '예',
        no: '아니오',
        detail: '자세히'
      },
      test: {
        title: '성향 테스트',

        q01: '모르는 사람에게 먼저 말을 건다',
        q02: '다른 사람이 편안하고 행복한지 확인한다',
        q03: '그림, 글, 음악을 창작한다',
        q04: '모든 일을 사전에 준비한다',
        q05: '울적하거나 우울함을 느낀다',
        q06: '회식, 파티, 사교모임을 계획한다',
        q07: '타인의 행동에 답답함을 느낀다',
        q08: '철학적이거나 영적인 문제들을 생각한다',
        q09: '일이나 물건을 정리하지 않고 어지럽게 그냥 둔다',
        q10: '스트레스나 걱정을 느낀다',
        q11: '어려운 단어를 사용한다',
        q12: '타인의 감정에 공감한다',

        a01: '전혀 아니다',
        a02: '별로 아니다',
        a03: '보통이다',
        a04: '약간 그렇다',
        a05: '매우 그렇다'
      },
      gameclass: {
        selectClassTitle: '직업 선택',
        selectClassComment: '당신의 직업과 특성을 선택하세요. (최대 3개)',
        selectClassEmpty: '직업(특성)을 1 ~ 3개 선택해주십시오.',
        maxSelectText: '최대 선택: {{max}}',
        goResult: '결과보기',
        close: '닫기',

        tanker: '탱커',
        dealer: '딜러',
        healer: '힐러',

        'Death-Knight': '죽음의 기사',
        blood: '혈기',
        'frost-d': '냉기',
        unholy: '부정',
        bloodDesc:
          '어둠의 수호자입니다. 생명의 기운을 조종하고 오염시켜 적이 공습해 오는 순간에도 자신의 생명을 유지합니다. 선호 무기: 양손 도끼, 둔기, 도검',
        'frost-dDesc':
          '얼어붙은 죽음의 사신입니다. 룬 마력을 사용해 무기로 포악하게 공격합니다. 선호 무기: 쌍수 도끼, 둔기, 도검',
        unholyDesc:
          '죽음과 부패의 대가입니다. 질병을 퍼뜨리고 언데드 부하를 통제하여 자신을 따르게 만듭니다. 선호 무기: 양손 도끼, 둔기, 도검',

        'Demon-Hunter': '악마사냥꾼',
        havoc: '파멸',
        vengeance: '복수',
        havocDesc:
          '쌍날검과 파괴적인 지옥 마법의 힘을 사용하는 무시무시한 투사입니다. 선호 무기: 쌍날검, 도검, 도끼, 장착 무기',
        vengeanceDesc:
          '내면의 악마를 받아들여 적을 소각하고 아군을 보호합니다. 선호 무기: 쌍날검, 도검, 도끼, 장착 무기',

        Druid: '드루이드',
        guardian: '수호',
        feral: '야성',
        balance: '조화',
        restoration: '회복',
        guardianDesc: '강인한 곰으로 변신하여 피해를 흡수하고 아군을 보호합니다. 선호 무기: 지팡이, 장창',
        feralDesc:
          '사나운 표범으로 변신하여 대상을 물어뜯고 출혈 효과를 일으켜 피해를 입힙니다. 선호 무기: 지팡이, 장창',
        balanceDesc:
          '강력한 달빛야수로 변신할 수 있습니다. 변신 상태에서는 비전 마법과 자연 마법의 힘을 조합하여 적을 처치합니다. 선호 무기: 지팡이, 단검, 둔기',
        restorationDesc:
          '강력한 자연 마법을 사용하여 아군을 치료하고 활력을 불어넣습니다. 선호 무기: 지팡이, 단검, 둔기',

        Hunter: '사냥꾼',
        'beast-mastery': '야수',
        marksmanship: '사격',
        survival: '생존',
        'beast-masteryDesc': '야생 동물의 지배자입니다. 다양한 야수를 길들여 함께 싸웁니다. 선호 무기: 활, 석궁, 총',
        marksmanshipDesc:
          '활동 반경이 넓고 적응력이 뛰어나며, 폭탄, 동물의 독, 그리고 자신과 교감하는 야수와의 협동 공격을 즐겨 사용합니다. 선호 무기: 장창, 지팡이',
        survivalDesc: '뛰어난 명사수입니다. 멀리 있는 적을 솜씨 좋게 처치합니다. 선호 무기: 활, 석궁, 총',

        Mage: '마법사',
        arcane: '비전',
        fire: '화염',
        'frost-m': '냉기',
        arcaneDesc: '원초적인 비전 마법을 부려 압도적인 힘으로 적을 파괴합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',
        fireDesc:
          '화염 마법의 순수한 정수에 집중하여, 맹렬한 불꽃으로 적을 공격합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',
        'frost-mDesc':
          '냉기 마법을 사용하여 적을 얼리고 산산조각 내어 처치합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',

        Monk: '수도사',
        brewmaster: '양조',
        mistweaver: '운무',
        windwalker: '풍운',
        brewmasterDesc:
          '튼튼한 투사로서, 예측할 수 없는 움직임과 신비한 술을 사용하여 공격을 회피하고 아군을 보호합니다. 선호 무기: 지팡이, 장창',
        mistweaverDesc:
          '옥룡의 지혜를 사용하여 생명의 힘을 조율하는 신비한 치유술의 대가입니다. 선호 무기: 지팡이, 둔기, 도검',
        windwalkerDesc:
          '비길 데 없는 격투술 전문가입니다. 손바닥과 주먹으로 적을 때려눕힙니다. 선호 무기: 장착 무기, 도끼, 둔기, 도검',

        Paladin: '성기사',
        'protection-p': '보호',
        'holy-p': '신성',
        retribution: '징벌',
        'protection-pDesc':
          '신성 마법을 이용하여 자신과 아군을 공격으로부터 보호합니다. 선호 무기: 도검, 둔기, 도끼, 방패',
        'holy-pDesc':
          '빛의 힘을 사용하여 아군을 보호하고 치료하며, 세상 가장 어두운 곳의 악을 제거합니다. 선호 무기: 도검, 둔기, 방패',
        retributionDesc:
          '정의감에 불타는 성전사입니다. 무기와 신성 마법을 이용하여 적을 처벌합니다. 선호 무기: 양손 도검, 둔기, 도끼',

        Priest: '사제',
        discipline: '수양',
        'holy-pr': '신성',
        shadow: '암흑',
        disciplineDesc:
          '마법을 이용하여 아군이 피해를 입지 않도록 보호하고 상처를 치료합니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기',
        'holy-prDesc':
          '다재다능한 치유 전문가입니다. 아군 개인 혹은 단체가 입은 피해를 복원하고, 자신이 사망한 후에도 아군을 치유할 수 있습니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기',
        shadowDesc:
          '사악한 어둠의 마법과 가공할 만한 공허 마법을 사용하여 적을 처치합니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기',

        Rogue: '도적',
        outlaw: '무법',
        subtlety: '잠행',
        assassination: '암살',
        outlawDesc: '교활한 술책으로 적과 맞서 싸우는 무자비한 도망자입니다. 선호 무기: 도끼, 둔기, 도검, 장착 무기',
        subtletyDesc:
          '어둠의 추적자입니다. 그림자 속에 숨어 있다가 희생자가 눈치챌 틈도 없이 기습 공격합니다. 선호 무기: 단검',
        assassinationDesc: '치명적인 독극물의 대가입니다. 단검으로 잔인한 일격을 날려 적을 처치합니다. 선호 무기: 단검',

        Shaman: '주술사',
        elemental: '정기',
        enhancement: '고양',
        'restoration-s': '복원',
        elementalDesc: '자연과 정령의 파괴적인 힘을 자유자재로 이용하여 주문을 시전합니다. 선호 무기: 둔기, 단검, 방패',
        enhancementDesc:
          '토템을 사용하는 전사입니다. 정령의 힘이 깃든 무기로 적을 공격합니다. 선호 무기: 쌍수 도끼, 둔기, 장착 무기',
        'restoration-sDesc':
          '고대의 영혼과 정화하는 물의 힘을 불러내어 아군의 부상을 치유합니다. 선호 무기: 둔기, 단검, 방패',

        Warlock: '흑마법사',
        affliction: '고통',
        demonology: '악마',
        destruction: '파괴',
        afflictionDesc:
          '암흑 마법의 대가입니다. 흡수와 주기적인 피해 주문을 전문적으로 사용합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',
        demonologyDesc:
          '악마술의 대가입니다. 자기 악마 군대의 영혼을 뒤틀어 강력한 힘을 발휘합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',
        destructionDesc:
          '화력전의 대가입니다. 화염을 불러내 적을 불태우고 파괴합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검',

        Warrior: '전사',
        'protection-w': '방어',
        arms: '무기',
        fury: '분노',
        'protection-wDesc':
          '방패를 사용하여 자신과 아군을 안전하게 보호하는 강인한 수호자입니다. 선호 무기: 도끼, 둔기, 도검, 방패',
        armsDesc:
          '무기를 잘 활용하는 전투의 달인입니다. 기동성과 압도적인 공격력을 바탕으로 적을 쓰러뜨립니다. 선호 무기: 양손 도끼, 둔기, 도검',
        furyDesc:
          '광폭하게 적을 공격하는 광전사입니다. 적을 질풍과 같이 공격하여 산산조각냅니다. 선호 무기: 쌍수 도끼, 둔기, 도검',

        Evoker: '기원사',
        devastation: '황폐',
        preservation: '보존',
        devastationDesc:
          '내면의 힘을 혼란스러운 붉은 불길이나 집중된 푸른 마법으로 방출해 전장을 파멸로 뒤덮습니다. 선호 무기: 지팡이, 도검, 단검, 둔기',
        preservationDesc:
          '에메랄드의 꿈의 힘을 일으켜 생명을 불어넣고 청동색 시간의 모래로 해악을 방지합니다. 선호 무기: 지팡이, 도검, 단검, 둔기'
      },
      result: {
        title: '성향 테스트',
        more: '더 보기',
        loading: '로딩중',
        stat: '통계 보기',
        retry: '다시하기',
        golostark: '로스트아크 결과',
        you: '당신의 성향',
        likeyoucount: '성향별 직업 수',
        likeyouratio: '직업별 성향 비율 (성향별 직업 수 / 직업총합)',
        machinelearning: '머신러닝',
        training: '학습 중',
        totalcount: '직업별 총합',
        testcount: '같은 결과를 가진 데이터 수',
        thankyou: '성향 테스트에 응해주셔서 감사합니다.',
        warning: '개인이 유저들의 재미와 초보자의 직업선택을 돕기위해 만든 앱입니다. 와우 공식 설문조사가 아닙니다.',
        sorry: '죄송합니다. 같은 성향의 결과가 없습니다.',

        agreeableness: '우호성',
        agreeablenessDesc: '대인 관계에서 보이는 질적인 측면을 확인하는 요인.',
        conscientiousness: '성실성',
        conscientiousnessDesc: '개인의 조직화된 정도를 확인하는 요인.',
        extraversion: '외향성',
        extraversionDesc: '개인이 열정적으로 타인을 찾고 환경과 상호작용하는 것을 확인하는 요인.',
        opennessToExperience: '개방성',
        opennessToExperienceDesc: '광범위한 주제에서 "새로운 것"에 대해 개인이 판단하는 경향을 확인하는 요인.',
        neuroticism: '신경성',
        neuroticismDesc:
          '개인이 일상 속에서 발생하는 힘든 경험들에 부정적 정서를 얼마나 자주 경험하는지를 확인하는 요인.'
      }
    }
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'ko'
})
export default i18n
