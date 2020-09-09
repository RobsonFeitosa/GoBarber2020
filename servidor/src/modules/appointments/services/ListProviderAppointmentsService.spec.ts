import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppoitmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppoitmentsRepository: FakeAppoitmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppoitmentsRepository = new FakeAppoitmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppoitmentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the appointments on specific day', async () => {
    const appointment1 = await fakeAppoitmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 5, 30, 18, 0, 0),
    });

    const appointment2 = await fakeAppoitmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 5, 30, 19, 0, 0),
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 6,
      day: 30,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
