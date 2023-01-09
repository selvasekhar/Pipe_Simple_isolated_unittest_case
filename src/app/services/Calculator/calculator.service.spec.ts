import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', ()=>{
  let Mocloggerservice: any;
  let calculator: CalculatorService;

  beforeEach(()=>{
    console.log('calling before each')
    Mocloggerservice = jasmine.createSpyObj('loggerservice', ['log']);
    calculator = new CalculatorService(Mocloggerservice);
  });
  it('should add two numbers', ()=>{
    console.log('calling add')
    let result = calculator.add(2,2);
    expect(result).toBe(4)
    expect(Mocloggerservice.log).toHaveBeenCalledTimes(1);
    // pending()
  });
  it('should minus two numbers', ()=>{
    console.log('calling substac')
    let result = calculator.substact(2,2);
    expect(result).toBe(0)
    expect(Mocloggerservice.log).toHaveBeenCalledTimes(1);
    // pending()
  });
})