export default  [
    {switchdata:[{
      id: 1,
      bank: 'HSBC',
      bonus: 200,
      accountType:'Advance',
      expiry:'N/A',
      img:'images/hsbc.png',
      link:'https://www.hsbc.co.uk/current-accounts/products/advance/?cid=HBUK:PHD:NA:P1:RB:L6:GO:XTR:14:CA:14:0119:001:CA_Br_Exact&ef_id=Cj0KCQiAtICdBhCLARIsALUBFcFrllWNvO79TvWxvXyoUaHElKX1Gf8x4STmxjJVTbm9aclUx1C2FQ4aAlteEALw_wcB:G:s&s_kwcid=AL!5601!3!633183644152!e!!g!!switch%20bank%20account%20hsbc&gclid=Cj0KCQiAtICdBhCLARIsALUBFcFrllWNvO79TvWxvXyoUaHElKX1Gf8x4STmxjJVTbm9aclUx1C2FQ4aAlteEALw_wcB&gclsrc=aw.ds',
      method:'Open an account and start a switch within 30 days (including 2+ direct debits or standing orders) and pay in £1,500+ in the first 60 days. The £200 is then paid within 20 days.'
      ,target:"You can't have had an HSBC current account, or opened one with its sister bank First Direct, since January 2019."
    },
    {
      id: 2,
      bank: 'First Direct',
      bonus: 175,
      accountType:'1st Account',
      expiry:'N/A',
      img:'/images/firstdirect.jpg',
      link:'https://www.firstdirect.com/banking/switching-bank-accounts/',
      method:'Open a 1st Account and within three months switch another account into it, plus pay in £1,000+.The £175 is then paid within 28 days.'
      ,target:"You can't have had an HSBC current account, or opened one with its sister bank First Direct, since January 2019."
    }]},
    {currentAccountData:[{
      id: 1,
      bank: 'Barclays',
      interestRate: 5.12,
      limit:5000,
      timeframe:'N/A',
      img:'/images/barclays.png',
      link:'https://www.barclays.co.uk/current-accounts/blue-rewards/',
      accountType:'Rainy Day Saver',
      withdrawals:'Easy access',
      requirement:"	Must have Barclays current account with added Blue Rewards. This requires 2 direct debits, £5 monthly fee (cancelled out by direct debits) and an £800 monthly deposit"
      },
      {
        id: 2,
        bank: 'Nationwide',
        interestRate: 5,
        limit:1500,
        timeframe:'12 months',
        img:"/images/nationwide.png",
        link:'https://www.nationwide.co.uk/current-accounts/flexdirect',
        accountType:'FlexDirect',
        withdrawals:'Easy access',
        requirement:"Only for first open account"
        }
        ,
      {
        id: 3,
        bank: 'Santander',
        interestRate: 4,
        limit:4000,
        timeframe:'N/A',
        img:"/images/santander.png",
        link:'https://www.santander.co.uk/personal/current-accounts/santander-edge-current-account',
        accountType:'Edge saver',
        withdrawals:'Easy access',
        requirement:"£3 monthly fee and 2 direct debtits & £500 monthly deposit"
        },
        {
          id: 4,
          bank: 'HSBC',
          interestRate: 3,
          limit:10000,
          timeframe:'N/A',
          img:"/images/hsbc.png",
          link:'https://www.hsbc.co.uk/savings/products/online-bonus-saver/',
          accountType:'Online Bonus Saver',
          withdrawals:'Easy access',
          requirement:"Open an account via Online Banking only. Rate will drop to 0.5% for months you withdraw"
          },
        {
          id: 5,
          bank: 'Zopa',
          interestRate: 2.86,
          limit:85000,
          timeframe:'N/A',
          img:"/images/zopa.png",
          link:'https://www.zopa.com/smart-saver',
          accountType:'Smart saver',
          withdrawals:'Easy access',
          requirement:null
          }
    ]},
    {regSaverData:[
      {
        id: 1,
        bank: 'First Direct',
        interestRate: 7,
        limit:{min:25,max:300},
        interest:"Paid after 12 months",
        timeframe:'12 months',
        img:"/images/firstdirect.jpg",
        link:'https://www.firstdirect.com/savings-and-investments/savings/regular-saver-account/',
        withdrawals:'Withdrawal available only after a year',
        requirement:null

        },
        {
          id: 2,
          bank: 'Lloyds Bank',
          interestRate: 5.25,
          limit:{min:25,max:400},
          interest:"Paid after 12 months",
          timeframe:'12 months',
          img:"/images/lloyds.png",
          link:'https://www.lloydsbank.com/savings/club-lloyds-monthly-saver.html',
          withdrawals:'Can withdraw anytime',
          requirement:"Need a Club Lloyds account"
  
          },
          {
            id: 3,
            bank: 'NatWest',
            interestRate: 5.12,
            limit:{min:1,max:150},
            interest:"Paid every month",
            timeframe:'No expiry',
            img:"/images/natwest.png",
            link:'https://www.natwest.com/savings/digital-regular-saver.html',
            withdrawals:'Can withdraw anytime',
            requirement:null
            
    
            },
            {
              id: 4,
              bank: 'HSBC',
              interestRate: 5,
              limit:{min:25,max:250},
              interest:"Paid after 12 months",
              timeframe:'12 months',
              img:"/images/hsbc.png",
              link:'https://www.hsbc.co.uk/savings/products/regular-saver/',
              withdrawals:'Withdrawal available only after a year',
              requirement:null
              
      
              },
              {
                id: 5,
                bank: 'Halifax',
                interestRate: 4.5,
                limit:{min:25,max:250},
                interest:"Paid after 12 months",
                timeframe:'12 months',
                img:"/images/halifax.png",
                link:'https://www.halifax.co.uk/savings/fixed-term/regular-saver.html',
                withdrawals:"You can't access your savings within 12 months unless you’re closing the Regular Saver account.",
                requirement:null
                
        
                }
                ,
              {
                id: 6,
                bank: 'Lloyds',
                interestRate: 4.5,
                limit:{min:25,max:250},
                interest:"Paid after 12 months",
                timeframe:'12 months',
                img:"/images/lloyds.png",
                link:'https://www.lloydsbank.com/savings/monthly-saver.html',
                withdrawals:"Can withdraw anytime",
                requirement:null
                
        
                }
    ]},
    {fixedInterestData:[
      {id: 1,
        bank: 'SmartSave',
        interestRate: 4.26,
        limit:{min:10000,max:85000},
        interest:"At maturity",
        timeframe:'1 year',
        img:"/images/smartsave.png",
        link:'https://smartsavebank.co.uk/1-year-fixed-rate-saver/',
        months:12,
        requirement:null},

        {id: 2,
          bank: 'Atom Bank',
          interestRate: 4.25,
          limit:{min:50,max:100000},
          interest:"Monthly or at maturity",
          timeframe:'1 year',
          img:"/images/atombank.png",
          link:'https://www.atombank.co.uk/fixed-saver/',
          months:12,
          requirement:null},

        {id: 3,
          bank: 'Vanquis Bank',
          interestRate: 4.4,
          limit:{min:1000,max:250000},
          interest:"Monthly, annually or at maturity",
          timeframe:'2 years',
          img:"/images/vaquisbank.png",
          link:'https://www.vanquissavings.co.uk/2-year-fixed-rate-bonds/',
          months:24,
          requirement:null},

          {id: 4,
            bank: 'SmartSave',
            interestRate: 4.56,
            limit:{min:10000,max:85000},
            interest:"At maturity",
            timeframe:'3 years',
            img:"/images/smartsave.png",
            link:'https://smartsavebank.co.uk/3-year-fixed-rate-saver',
            months:36,
            requirement:null},

            {id: 5,
              bank: 'Close Brothers',
              interestRate: 4.55,
              limit:{min:10000,max:200000},
              interest:"Annually or at maturity",
              timeframe:'5 years',
              img:"/images/smartsave.png",
              link:'https://www.closesavings.co.uk/personal/savings-accounts/fixed-rate-bond/5-year',
              months:60,
              requirement:null}
    ]}
  ];
  