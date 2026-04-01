import { Target, User, Volume2 } from 'lucide-react';
import { lessonGuidance } from '../../data/guidance';

export default function TeacherGuidance() {
  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 shadow-soft">
        <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">
          Orientacoes ao(a) Professor(a)
        </h2>
        <p className="text-xs text-stone-400 font-bold">
          Objetivos, acao esperada da crianca e consciencia fonologica por aula
        </p>
      </div>

      <div className="space-y-4">
        {lessonGuidance.map(lesson => (
          <div key={lesson.num} className="rounded-2xl overflow-hidden shadow-soft border border-stone-200">
            <div className="px-4 py-3 flex items-center gap-3 bg-white border-b border-stone-100">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-mono text-sm text-white font-medium" style={{ backgroundColor: lesson.color }}>
                {String(lesson.num).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-black text-stone-800 flex-1">{lesson.title}</h3>
              <span className="text-[10px] font-bold text-stone-400 flex items-center gap-1 bg-cream-100 border border-stone-200 rounded-full px-2 py-0.5">
                <Volume2 className="w-3 h-3" />
                {lesson.fono.sound}
              </span>
            </div>

            <div className="bg-white p-4 space-y-4">
              {lesson.objectives && lesson.objectives.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5 pb-1.5 border-b-2 border-brand-100 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    Objetivos
                  </h4>
                  <ul className="space-y-2">
                    {lesson.objectives.map(obj => (
                      <li key={obj.code} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
                        <span className="text-brand-500 font-black flex-shrink-0 mt-0.5">-</span>
                        <span>
                          <strong className="text-stone-700">{obj.code}</strong> - {obj.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5 pb-1.5 border-b-2 border-brand-100 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Acao esperada
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">{lesson.action}</p>
              </div>

              <div className="bg-brand-50 border border-brand-100 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-brand-700 mb-1.5">
                  <Volume2 className="w-3 h-3" />
                  Consciencia fonologica - {lesson.fono.sound}
                </div>
                <p className="text-xs text-brand-900 leading-relaxed">{lesson.fono.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
